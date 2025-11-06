
import { motion } from "framer-motion"
import img1 from "../../assets/2025.png"
import img2 from "../../assets/2025.png"
import img3 from "../../assets/2025.png"
import img4 from "../../assets/2025.png"
import img5 from "../../assets/2025.png"
import img6 from "../../assets/2025.png"
import img7 from "../../assets/2025.png"


export default function Propre() {
  
  const items = [
   { img: img1, name: "Juara 3 Tahfizh 2022/2023" },
   { img: img2, name: "Ilham Mubarak" },
   { img: img3, name: "Ilham Mubarak" },
   { img: img4, name: "Ilham Mubarak" },
   { img: img5, name: "Ilham Mubarak" },
   { img: img6, name: "Ilham Mubarak" },
   { img: img7, name: "Ilham Mubarak" },
  ]

  const looped = [
    ...items, ...items, ...items
  ]

  return (
    <motion.section className="bg-secondary items-center text-center justify-center flex flex-col min-h-screen">
      <motion.h1
        className="text-[4vw] font-hanson text-primary mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      >
        Prestasi Kami
      </motion.h1>
      <motion.div
        className="group w-full overflow-x-auto whitespace-nowrap flex scrollbar-hide p-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className="marquee inline-flex min-w-max">
          {looped.map((src, i) => (
            <div className="flex flex-col items-center">
              <img 
                key={i}
                src={src.img}
                alt={src.name}
                className="mx-32 h-12 w-12 object-cover rounded-xl"
              />

              <h2 className="mt-6 font-hanson text-2xl text-primary">
                {src.name}
              </h2>
            </div>
            
          ))}
        </motion.div>

        <motion.div className="marquee inline-flex min-w-max">
          {looped.map((src, i) => (
            <div className="flex flex-col items-center">
              <img 
              key={i + items.length}
              src={src.img}
              alt={src.name}
              className="mx-32 h-12 w-12 object-cover rounded-xl"
              />

              <h2 className="mt-6 font-hanson text-primary text-2xl">
                {src.name}
              </h2>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
