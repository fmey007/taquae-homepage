import { colors, fonts } from '@/app/lib/design';

export const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        inset: 0,
        top: 0,
        zIndex: 60,
        padding: '18px 0',
        background: 'rgba(14, 15, 12, 0.78)',
        backdropFilter: 'blur(14px) saturate(1.1)',
        color: colors.light,
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 56px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: fonts.display }}>
          Taquae
        </div>
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <a href="#services" style={{ color: colors.light, textDecoration: 'none' }}>
              Services
            </a>
          </li>
          <li>
            <a href="#case" style={{ color: colors.light, textDecoration: 'none' }}>
              Cas
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: colors.light, textDecoration: 'none' }}>
              À propos
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: colors.light, textDecoration: 'none' }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
