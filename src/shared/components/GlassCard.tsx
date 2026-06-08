import { cn } from '../../shared/utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export default function GlassCard({ children, className, active }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-xl p-6 transition-all',
        active && 'active-glow',
        className
      )}
    >
      {children}
    </div>
  );
}