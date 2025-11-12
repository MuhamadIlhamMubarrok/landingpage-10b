import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#A6FF4D] text-white w-full px-8 md:px-16 py-12 relative overflow-hidden">
      {/* Bagian atas: teks kiri & kanan */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        {/* Kiri */}
        <div className="text-left mb-6 md:mb-0">
          <h2 className="text-lg font-bold uppercase tracking-wide text-black">
            kelas 10B
          </h2>
          <p className="text-xs font-light text-black">WE ARE STRONGER TOGETHER</p>
        </div>

        {/* Tengah */}
        <nav className="flex flex-col md:flex-row gap-3 text-sm font-medium text-center text-black">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            ABOUT
          </a>
          <a href="#" className="hover:underline">
            TESTIMONIAL
          </a>
          <a href="#" className="hover:underline">
            CONTACT
          </a>
          <a href="#" className="hover:underline">
            STORE
          </a>
        </nav>

        {/* Kanan: search bar */}
        <div className="mt-6 md:mt-0 flex items-center gap-2 bg-black rounded-full px-3 py-1.5 w-[200px] ">
          <input
            type="text"
            placeholder="itulah"
            className="flex-1 text-black text-sm focus:outline-none placeholder-white "
          />
          <button className="bg-[#000000] text-white rounded-full px-2.5 py-1 text-sm font-bold">
            →
          </button>
        </div>
      </div>

      {/* CLS → XB */}
      
      <div className="flex justify-center items-center mb-10 [perspective:150px] ">
  <h1 className="text-[80px] md:text-[300px] font-extrabold tracking-tight leading-none [transform:rotateX(30deg)_skewX(-15deg)] text-black">
    CLS<span className="mx-3">→</span>XB
  </h1>
</div>

      {/* Footer bawah */}
      <div className="flex flex-col md:flex-row justify-between text-xs font-light text-black">
        <p>© CLS XB DESIGN™ | ALL RIGHTS RESERVED</p>
        <p>TWITTER: NATHANWICKCLASSPROJECT</p>
        <p>FASACIAN | WEB DESIGN | DESIGN BY TELE</p>
      </div>
    </footer>
  );
}
