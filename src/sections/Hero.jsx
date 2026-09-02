import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileDown,
  Server,
  Database,
  Code2,
  Network,
  Boxes,
} from 'lucide-react';
import { personal } from '@/data/personal';
import Button from '@/components/Button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const techOrbits = [
  { label: 'Java', icon: Code2, angle: 0, radius: 130 },
  { label: 'Spring Boot', icon: Boxes, angle: 72, radius: 130 },
  { label: 'REST APIs', icon: Network, angle: 144, radius: 130 },
  { label: 'Database', icon: Database, angle: 216, radius: 130 },
  { label: 'Backend', icon: Server, angle: 288, radius: 130 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      {/* Floating background orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-accent-700/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="font-mono text-sm text-accent-400 mb-3"
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.05]"
            >
              Aman Kumar
            </motion.h1>
            <motion.div
              variants={item}
              className="mt-3 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text">
                Java Backend Developer
              </h2>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              {personal.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button as="a" href="#projects" icon={ArrowRight}>
                View Projects
              </Button>
              <Button
                as="a"
                href={personal.resumeUrl}
                variant="secondary"
                icon={FileDown}
              >
                Download Resume
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                icon={Mail}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                Connect
              </span>
              <span className="h-px w-8 bg-white/10" />
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-accent-400"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: animated backend visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:flex items-center justify-center h-[480px] xl:h-[540px]"
          >
            {/* Rotating orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Tech nodes */}
              {techOrbits.map(({ label, icon: Icon, angle, radius }) => {
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <motion.div
                    key={label}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    style={{ x, y }}
                    className="absolute group"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass glass-hover text-accent-400 shadow-lg shadow-accent-500/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono text-gray-500 group-hover:text-accent-400 transition-colors">
                        {label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Orbit circle */}
              <div className="absolute h-[260px] w-[260px] rounded-full border border-white/[0.04]" />
              <div className="absolute h-[380px] w-[380px] rounded-full border border-white/[0.02]" />
            </motion.div>

            {/* Center core */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-500/20 to-accent-700/10 border border-accent-500/30 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl bg-accent-500/10 blur-2xl animate-pulse-glow" />
                <div className="relative flex flex-col items-center gap-1">
                  <Server className="h-10 w-10 text-accent-400" />
                  <span className="font-mono text-[10px] text-accent-300/70 uppercase tracking-widest">
                    Backend
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating code snippets */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-4 right-4 glass rounded-xl px-3 py-2 font-mono text-[11px] text-gray-400"
            >
              <span className="text-accent-400">@RestController</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 left-0 glass rounded-xl px-3 py-2 font-mono text-[11px] text-gray-400"
            >
              <span className="text-[#c6a0fa]">Spring</span>
              <span className="text-gray-600">.</span>
              <span className="text-accent-400">Security</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-20 right-2 glass rounded-xl px-3 py-2 font-mono text-[11px] text-gray-400"
            >
              <span className="text-accent-400">JPA</span>
              <span className="text-gray-600"> / </span>
              <span className="text-[#c6a0fa]">Hibernate</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-accent-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
