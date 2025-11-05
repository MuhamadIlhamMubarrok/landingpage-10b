import React from 'react'; 

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 p-5"> 
      <div className="flex justify-between items-center text-[11px] font-hanson uppercase leading-tight underline text-blood">
        <div>
          SMA PLUS ABUDZAR<br/>00:00 WIB
        </div>
        
        <div className="text-right">
          X CLASS<br/>INDONESIA
        </div>

      </div>
    </nav>
  );
};

export default Navbar;