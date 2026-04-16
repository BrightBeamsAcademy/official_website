export default function TopBar() {
  return (
    <div className="bg-[#ff7162] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="tel:2536324372" className="hover:opacity-80">📞 253-632-4372</a>
          <a href="mailto:info@brightbeamsacademy.com" className="hover:opacity-80">✉ info@brightbeamsacademy.com</a>
        </div>
        <a href="#" className="hover:opacity-80">Log in or Register</a>
      </div>
    </div>
  );
}
