import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/personal';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#08090c]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20 font-mono text-accent-400 text-sm">
                AK
              </span>
              Aman Kumar
            </a>
            <p className="text-sm text-gray-500">Java Backend Developer</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-accent-400"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-accent-400"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg glass glass-hover text-gray-400 hover:text-accent-400"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-sm text-gray-600">
            © {year === 2026 ? 2026 : '2026'} Aman Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
