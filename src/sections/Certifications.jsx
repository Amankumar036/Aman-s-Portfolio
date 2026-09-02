import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { certifications } from '@/data/projects';

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          label="Certifications"
          title="Certifications"
          subtitle="Professional certifications that validate my Java and full-stack development skills."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                <BadgeCheck className="h-4 w-4 text-accent-400/70" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
