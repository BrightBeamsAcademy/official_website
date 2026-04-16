"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Section = "blog" | "gallery" | "faculty" | "events";

const SECTIONS: { key: Section; label: string }[] = [
  { key: "blog", label: "Blog" },
  { key: "gallery", label: "Gallery" },
  { key: "faculty", label: "Faculty" },
  { key: "events", label: "Events" },
];

const BLOG_CATEGORIES = ["Bilingual Education", "Child Development", "Family Tips", "Academy News"];

export default function AdminDashboard() {
  const [tab, setTab] = useState<Section>("blog");
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function fetchItems(section: Section) {
    setLoading(true);
    const res = await fetch(`/api/admin/data?section=${section}`);
    setItems(res.ok ? await res.json() : []);
    setLoading(false);
  }

  useEffect(() => { fetchItems(tab); }, [tab]);

  async function deleteItem(id: string) {
    if (!confirm("Delete this item?")) return;
    await fetch("/api/admin/data", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section: tab, id }),
    });
    fetchItems(tab);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  async function uploadImage(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const { url } = await res.json();
    return url;
  }

  async function addItem(item: any) {
    setSaving(true);
    await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section: tab, item }),
    });
    setSaving(false);
    fetchItems(tab);
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={120} height={38} className="h-10 w-auto" />
          <span className="text-gray-400 text-sm font-medium">Admin Dashboard</span>
        </div>
        <button onClick={logout} className="text-sm text-gray-500 hover:text-[#ff7162] transition-colors">
          Log out
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => setTab(s.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                tab === s.key ? "bg-[#4A90D9] text-white" : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Items list */}
        <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="font-bold text-gray-800">
              {SECTIONS.find((s) => s.key === tab)?.label} ({items.length})
            </h2>
          </div>
          {loading ? (
            <div className="p-8 text-center text-gray-400">Loading…</div>
          ) : items.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No items yet.</div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between px-6 py-4 gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" />
                    )}
                    {item.url && (
                      <img src={item.url} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" />
                    )}
                    <div className="min-w-0">
                      <div className="font-medium text-gray-800 truncate">{item.title || item.name || item.caption || "—"}</div>
                      <div className="text-sm text-gray-400 truncate">{item.category || item.role || item.date || ""}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-sm text-red-400 hover:text-red-600 transition-colors shrink-0"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Add form */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">Add New</h2>
          {tab === "blog" && <BlogForm onAdd={addItem} saving={saving} />}
          {tab === "gallery" && <GalleryForm onAdd={addItem} saving={saving} uploadImage={uploadImage} />}
          {tab === "faculty" && <FacultyForm onAdd={addItem} saving={saving} uploadImage={uploadImage} />}
          {tab === "events" && <EventsForm onAdd={addItem} saving={saving} uploadImage={uploadImage} />}
        </div>
      </div>
    </main>
  );
}

/* ── Blog Form ── */
function BlogForm({ onAdd, saving }: { onAdd: (item: any) => void; saving: boolean }) {
  const [form, setForm] = useState({ title: "", category: BLOG_CATEGORIES[0], date: "", excerpt: "" });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await onAdd(form);
    setForm({ title: "", category: BLOG_CATEGORIES[0], date: "", excerpt: "" });
  }
  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <input required placeholder="Title" value={form.title} onChange={(e) => set("title", e.target.value)} className={input} />
      <select value={form.category} onChange={(e) => set("category", e.target.value)} className={input}>
        {BLOG_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>
      <input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className={input} />
      <textarea required placeholder="Excerpt" value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} rows={3} className={`${input} sm:col-span-2 resize-none`} />
      <button type="submit" disabled={saving} className={btn}>
        {saving ? "Saving…" : "Add Post"}
      </button>
    </form>
  );
}

/* ── Gallery Form ── */
function GalleryForm({ onAdd, saving, uploadImage }: { onAdd: (item: any) => void; saving: boolean; uploadImage: (f: File) => Promise<string> }) {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const url = await uploadImage(file);
    setUploading(false);
    await onAdd({ url, caption });
    setCaption("");
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  }
  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <input required type="file" accept="image/*" ref={fileRef} onChange={(e) => setFile(e.target.files?.[0] ?? null)} className={input} />
      <input placeholder="Caption (optional)" value={caption} onChange={(e) => setCaption(e.target.value)} className={input} />
      <button type="submit" disabled={saving || uploading || !file} className={btn}>
        {uploading ? "Uploading…" : saving ? "Saving…" : "Add Photo"}
      </button>
    </form>
  );
}

/* ── Faculty Form ── */
function FacultyForm({ onAdd, saving, uploadImage }: { onAdd: (item: any) => void; saving: boolean; uploadImage: (f: File) => Promise<string> }) {
  const [form, setForm] = useState({ name: "", role: "", bio: "" });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    const imageUrl = file ? await uploadImage(file) : "";
    setUploading(false);
    await onAdd({ ...form, imageUrl });
    setForm({ name: "", role: "", bio: "" });
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  }
  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <input required placeholder="Name" value={form.name} onChange={(e) => set("name", e.target.value)} className={input} />
      <input required placeholder="Role / Title" value={form.role} onChange={(e) => set("role", e.target.value)} className={input} />
      <textarea placeholder="Bio (optional)" value={form.bio} onChange={(e) => set("bio", e.target.value)} rows={3} className={`${input} sm:col-span-2 resize-none`} />
      <input type="file" accept="image/*" ref={fileRef} onChange={(e) => setFile(e.target.files?.[0] ?? null)} className={input} />
      <button type="submit" disabled={saving || uploading} className={btn}>
        {uploading ? "Uploading…" : saving ? "Saving…" : "Add Faculty"}
      </button>
    </form>
  );
}

/* ── Events Form ── */
function EventsForm({ onAdd, saving, uploadImage }: { onAdd: (item: any) => void; saving: boolean; uploadImage: (f: File) => Promise<string> }) {
  const [form, setForm] = useState({ title: "", date: "", description: "" });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    const imageUrl = file ? await uploadImage(file) : "";
    setUploading(false);
    await onAdd({ ...form, imageUrl });
    setForm({ title: "", date: "", description: "" });
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  }
  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <input required placeholder="Event Title" value={form.title} onChange={(e) => set("title", e.target.value)} className={input} />
      <input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className={input} />
      <textarea required placeholder="Description" value={form.description} onChange={(e) => set("description", e.target.value)} rows={3} className={`${input} sm:col-span-2 resize-none`} />
      <input type="file" accept="image/*" ref={fileRef} onChange={(e) => setFile(e.target.files?.[0] ?? null)} className={input} />
      <button type="submit" disabled={saving || uploading} className={btn}>
        {uploading ? "Uploading…" : saving ? "Saving…" : "Add Event"}
      </button>
    </form>
  );
}

const input = "border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#4A90D9] w-full";
const btn = "bg-[#4A90D9] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d6fa8] transition-colors disabled:opacity-60 sm:col-span-2 justify-self-start";
