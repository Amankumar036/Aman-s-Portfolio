import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { education, certifications } from '@/data/projects';

const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle label="Education" title="Education" />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-white/10 to-transparent" />

            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-16 pb-10 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-5 top-1 -translate-x-1/2 z-10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                </div>

                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-3 py-1 text-xs font-mono text-accent-400">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                  <p className="text-sm font-semibold text-accent-400 mt-3">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
