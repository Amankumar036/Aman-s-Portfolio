import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  X,
  Check,
  ArrowRight,
  UtensilsCrossed,
  Contact,
  Car,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { projects } from '@/data/projects';

const iconMap = { UtensilsCrossed, Contact, Car };

const ProjectVisual = ({ project, size = 'card' }) => {
  const Icon = iconMap[project.theme.icon] || Server;
  const isLarge = size === 'detail';

  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${project.theme.from}25, transparent 60%), radial-gradient(ellipse at 70% 80%, ${project.theme.to}20, transparent 60%), #0d0e12`,
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-30" />

      {/* Floating icon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center gap-3"
      >
        <div
          className="flex items-center justify-center rounded-2xl border backdrop-blur-xl"
          style={{
            height: isLarge ? 80 : 56,
            width: isLarge ? 80 : 56,
            borderColor: `${project.theme.accent}40`,
            background: `${project.theme.from}15`,
          }}
        >
          <Icon
            className={isLarge ? 'h-10 w-10' : 'h-7 w-7'}
            style={{ color: project.theme.accent }}
          />
        </div>
      </motion.div>

      {/* Floating code chips */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute top-3 right-3 glass rounded-lg px-2.5 py-1.5 font-mono text-[10px] text-gray-400"
      >
        {project.technologies[0]}
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-3 left-3 glass rounded-lg px-2.5 py-1.5 font-mono text-[10px] text-gray-400"
      >
        {project.technologies[1]}
      </motion.div>

      {/* Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.theme.from}10, transparent 70%)`,
        }}
      />
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          label="Projects"
          title="Featured Projects"
          subtitle="Hands-on backend and full-stack projects built with Java, Spring Boot, and modern database technologies."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Visual */}
              <div className="relative h-44 overflow-hidden">
                <ProjectVisual project={project} />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-accent-400/80 mt-1 font-medium">
                  {project.tagline}
                </p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 text-[11px] text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 text-[11px] text-gray-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-5 flex items-center gap-2">
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    View Details
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <span className="flex-1" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-accent-400"
                  >
                    <Github className="h-[16px] w-[16px]" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-accent-400"
                    >
                      <ExternalLink className="h-[16px] w-[16px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl"
            >
              {/* Header visual */}
              <div className="relative h-48">
                <ProjectVisual project={selected} size="detail" />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg glass text-gray-300 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white">{selected.name}</h3>
                <p className="text-sm text-accent-400 mt-1">{selected.tagline}</p>
                <p className="text-gray-400 mt-4 leading-relaxed">{selected.description}</p>

                {selected.architecture && (
                  <div className="mt-5 glass rounded-xl p-4">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-gray-600 mb-1">
                      Architecture
                    </p>
                    <p className="font-mono text-sm text-accent-400">{selected.architecture}</p>
                  </div>
                )}

                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-accent-400 mb-3">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selected.features.map((f, fi) => (
                      <motion.div
                        key={fi}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: fi * 0.03 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/15">
                          <Check className="h-2.5 w-2.5 text-accent-400" />
                        </span>
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div className="mt-6">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-accent-400 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button as="a" href={selected.github} icon={Github}>
                    View on GitHub
                  </Button>
                  {selected.demo && (
                    <Button as="a" href={selected.demo} variant="secondary" icon={ExternalLink}>
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
