import { motion } from 'framer-motion';
import {
  Code2,
  Boxes,
  Server,
  Cloud,
  Database,
  GitBranch,
  Wrench,
  Cpu,
  Globe,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { skillCategories } from '@/data/skills';

const iconMap = {
  Code2,
  Boxes,
  Server,
  Cloud,
  Database,
  GitBranch,
  Wrench,
  Cpu,
  Globe,
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          label="Skills"
          title="Technical Skills"
          subtitle="A focused toolkit for building secure, scalable backend systems and full-stack applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (ci % 3) * 0.06, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass glass-hover rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {cat.skills.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-300">{skill.name}</span>
                        <span className="font-mono text-[10px] text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + si * 0.05,
                            duration: 0.7,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
