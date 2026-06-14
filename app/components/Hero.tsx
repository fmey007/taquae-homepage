import { ReactNode } from 'react';
import { colors, fonts } from '@/app/lib/design';

interface HeroProps {
  children: ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <section
      style={{
        background: colors.dark,
        color: colors.light,
        padding: 'clamp(80px, 10vw, 140px) 0',
        position: 'relative',
      }}
      data-nav="dark"
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
        {children}
      </div>
    </section>
  );
};
