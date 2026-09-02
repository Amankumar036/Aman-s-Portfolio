import { motion } from 'framer-motion';

const SectionTitle = ({ label, title, subtitle, align = 'center' }) => {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'items-center text-center';

  return (
    <div className={`flex flex-col ${alignment} gap-3 mb-12 md:mb-16`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent-400"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className={`h-px w-20 bg-gradient-to-r from-accent-500 to-transparent ${
          align === 'left' ? 'origin-left' : 'origin-center'
        }`}
      />
    </div>
  );
};

export default SectionTitle;
