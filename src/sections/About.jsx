import { motion } from 'framer-motion';
import { Server, Network, Database, Layers, Check } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { aboutSummary, aboutHighlights, whatIDo } from '@/data/personal';

const iconMap = { Server, Network, Database, Layers };

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle label="About" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8 h-full">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {aboutSummary}
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <h3 className="text-sm font-mono uppercase tracking-widest text-accent-400 mb-4">
                  What I Do
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {whatIDo.map((thing, i) => (
                    <motion.div
                      key={thing}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/15 border border-accent-500/20">
                        <Check className="h-3 w-3 text-accent-400" />
                      </span>
                      <span className="text-sm text-gray-300">{thing}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {aboutHighlights.map((card, i) => {
              const Icon = iconMap[card.icon] || Server;
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
