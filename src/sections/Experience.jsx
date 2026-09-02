import { motion } from 'framer-motion';
import { MapPin, Calendar, GitBranch } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          label="Experience"
          title="Experience"
          subtitle="Professional work building backend services with Java and Spring Boot."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-white/10 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="relative pl-14 md:pl-0 mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 ring-4 ring-accent-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                </span>
              </div>

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-3 py-1 text-[11px] font-mono text-accent-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-accent-400 font-medium text-sm mt-0.5">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex gap-2.5 text-sm text-gray-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500/60" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-gray-600 mb-2.5 flex items-center gap-1.5">
                      <GitBranch className="h-3 w-3" />
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
