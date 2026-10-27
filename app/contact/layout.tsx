import { pageMetadata, contactSeo } from "@/lib/seo";

export const metadata = pageMetadata(contactSeo);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
