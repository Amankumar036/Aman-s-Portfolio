import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-accent-500 text-black hover:bg-accent-400 shadow-lg shadow-accent-500/25',
  secondary:
    'glass text-white hover:border-accent-500/30 hover:bg-white/[0.06]',
  ghost: 'text-gray-300 hover:text-white hover:bg-white/[0.05]',
};

const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  href,
  download,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'right',
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (as === 'a') {
    return (
      <motion.a
        href={href}
        download={download}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${base} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
