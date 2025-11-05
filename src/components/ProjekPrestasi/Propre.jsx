
import { motion } from "framer-motion"
import img1 from "../../assets/2025.png"
import img2 from "../../assets/2025.png"
import img3 from "../../assets/2025.png"
import img4 from "../../assets/2025.png"
import img5 from "../../assets/2025.png"
import img6 from "../../assets/2025.png"
import img7 from "../../assets/2025.png"


export default function Propre() {
  
  const images = [
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7,
  ]

  return (
    <motion.section className="bg-secondary items-center text-center justify-center flex flex-col min-h-screen">
      <motion.h1
        className="text-4xl font-hanson text-primary mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
      >
        Ini Prestasi
      </motion.h1>
      <motion.div
        className="group w-[800px] overflow-x-auto whitespace-nowrap flex scrollbar-hide border border-gray-300 rounded-2xl p-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div className="marquee inline-flex min-w-max">
          {images.map((src, i) => (
            <img  
              key={i}
              src={src}
              alt=""
              className="mx-12 h-28 w-28 object-cover rounded-xl"
            />
          ))}
        </motion.div>

        <motion.div className="marquee inline-flex min-w-max">
          {images.map((src, i) => (
            <img 
              key={i + images.length}
              src={src}
              alt=""
              className="mx-12 h-28 w-28 object-cover rounded-xl"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
