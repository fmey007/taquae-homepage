import { colors, fonts } from '@/app/lib/design';

export const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        inset: 0,
        top: 0,
        zIndex: 60,
        padding: '14px 0',
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
        <a
          href="/"
          aria-label="Taquae Consulting — Accueil"
          style={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '6px',
            textDecoration: 'none',
            color: colors.light,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: fonts.logo,
                fontSize: '46px',
                fontWeight: 400,
                letterSpacing: '0',
                lineHeight: 1,
                alignSelf: 'stretch',
              }}
            >
              Taquae
            </span>
            <span
              style={{
                fontFamily: fonts.logo,
                fontSize: '15px',
                fontWeight: 400,
                color: colors.accent,
                marginTop: '4px',
                lineHeight: 1,
              }}
            >
              Consulting
            </span>
          </span>
          <span
            aria-hidden="true"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: colors.accent,
              display: 'inline-block',
              marginTop: '8px',
            }}
          />
        </a>
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
