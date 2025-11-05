
import { motion } from "framer-motion"


export default function Propre() {
  


  return (
    <motion.section className="bg-secondary">
      <motion.div
        className="bg-secondary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div>
          <span></span>
        </motion.div>

        <motion.div>
          <span></span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
