import { motion } from 'framer-motion';

export default function pageHeader({ title, subtitle, children }) {
  return (
    <>
      <section className="bg-zinc-900">
        <motion.div
          className="py-16 md:py-24 px-12 sm:px-24 lg:px-32"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            type: 'spring',
            damping: 10,
            mass: 0.75,
            stiffness: 100,
            duration: 0.15
          }}
        >
          <p className="text-brand-blue text-lg font-bold mb-4 text-center lg:text-left selection:bg-brand-blue selection:text-black">{subtitle}</p>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-8xl text-white font-roc text-center lg:text-left selection:bg-brand-blue selection:text-black">{title}</h1>
          <div className="text-center lg:text-left selection:bg-brand-blue selection:text-black">{children}</div>
        </motion.div>
      </section>
    </>
  );
}
