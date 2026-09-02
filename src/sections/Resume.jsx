import { motion } from 'framer-motion';
import { FileDown, Mail } from 'lucide-react';
import { personal } from '@/data/personal';
import Button from '@/components/Button';

const Resume = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl glass p-8 md:p-14 text-center"
        >
          {/* Background accents */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent-700/10 blur-3xl" />
          <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-40" />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Let&apos;s Build Something Great Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed"
            >
              Interested in working together or discussing an opportunity? Check out my
              resume or get in touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Button as="a" href={personal.resumeUrl} icon={FileDown}>
                Download Resume
              </Button>
              <Button as="a" href="#contact" variant="secondary" icon={Mail}>
                Contact Me
              </Button>
            </motion.div>

            <p className="mt-4 text-xs text-gray-600 font-mono">
              Resume: /Aman_Kumar_Resume.pdf
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
