import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      };
      setTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 p-5">
      <div className="flex justify-between items-center text-[11px] font-hanson uppercase leading-tight underline text-primary">
        <div>SMA PLUS ABUDZAR<br />{time ? `${time} WIB` : '00:00 WIB'}
        </div>

        <div className="text-right">X CLASS<br />INDONESIA
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
