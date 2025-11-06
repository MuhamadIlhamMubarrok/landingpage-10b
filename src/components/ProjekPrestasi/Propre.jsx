import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Propre() {
  const [items, setItems] = useState([]);

  // ambil data dari JSON
  useEffect(() => {
    fetch("https://muhamadilhammubarrok.github.io/project-10b-assets/data/propre/propre.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  const looped = [...items, ...items, ...items];

  return (
    <motion.section className="bg-secondary items-center text-center justify-center flex flex-col min-h-screen">
      <motion.h1 className="text-[6vw] md:text-[4vw] font-hanson text-primary mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        Prestasi Kami
      </motion.h1>

      <motion.div className="group w-full overflow-x-auto whitespace-nowrap flex scrollbar-hide p-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <motion.div className="marquee inline-flex min-w-max">
          {looped.map((src, i) => (
            <div key={i} className="flex flex-col items-center mx-16">
              <img src={src.img} alt={src.name} className="h-12 w-12 object-cover rounded-xl" />
              <h2 className="mt-6 font-hanson text-2xl text-primary">{src.name}</h2>
            </div>
          ))}
        </motion.div>

        <motion.div className="marquee inline-flex min-w-max">
          {looped.map((src, i) => (
            <div key={i + items.length} className="flex flex-col items-center mx-16">
              <img src={src.img} alt={src.name} className="h-12 w-12 object-cover rounded-xl" />
              <h2 className="mt-6 font-hanson text-2xl text-primary">{src.name}</h2>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
