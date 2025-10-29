import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="flex flex-row justify-between items-center text-white py-4 lg:px-[200px] px-[20px] bg-gray-900">
        <section className="flex flex-row items-center gap-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/id/2/21/Ferrari_logo1.png" className="w-12 h-12" alt="logo" />
          <h1 className="text-2xl font-bold">Ferrari</h1>
        </section>

        <section className="hidden md:flex">
          <ul className="flex flex-row items-center gap-x-8 text-lg">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Services</li>
            <li className="hover:text-red-500 cursor-pointer">Pricing</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </section>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden flex items-center text-3xl focus:outline-none">
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <section className="md:hidden bg-gray-900 text-white">
          <ul className="flex flex-col items-center gap-y-4 py-6 text-lg">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Services</li>
            <li className="hover:text-red-500 cursor-pointer">Pricing</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Navbar;
