import { colors, fonts } from '@/app/lib/design';

export const Footer = () => {
  return (
    <footer
      style={{
        background: colors.dark,
        color: colors.light,
        padding: 'clamp(60px, 8vw, 96px) 0 32px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '40px',
            paddingBottom: '40px',
            borderBottom: `1px solid ${colors.ruleDark}`,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                lineHeight: 1,
                marginBottom: '20px',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility',
              }}
            >
              <span
                style={{
                  fontFamily: fonts.logo,
                  fontSize: '40px',
                  fontWeight: 400,
                  lineHeight: 1,
                  alignSelf: 'stretch',
                  color: colors.light,
                }}
              >
                Taquae
              </span>
              <span
                style={{
                  fontFamily: fonts.logo,
                  fontSize: '14px',
                  fontWeight: 400,
                  color: colors.accent,
                  marginTop: '4px',
                  lineHeight: 1,
                }}
              >
                Consulting
              </span>
            </div>
            <p style={{ fontSize: '14px', color: colors.mutedDark, lineHeight: 1.6 }}>
              Conseil en stratégie IA pour PME et organisations du développement. Paris &
              Frankfurt.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              <li>
                <a href="#audit" style={{ color: colors.light, textDecoration: 'none' }}>
                  Audit IA
                </a>
              </li>
              <li>
                <a href="#advisory" style={{ color: colors.light, textDecoration: 'none' }}>
                  Accompagnement
                </a>
              </li>
              <li>
                <a href="#delivery" style={{ color: colors.light, textDecoration: 'none' }}>
                  Mise en œuvre
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
              About
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              <li>
                <a href="#about" style={{ color: colors.light, textDecoration: 'none' }}>
                  À propos
                </a>
              </li>
              <li>
                <a href="#method" style={{ color: colors.light, textDecoration: 'none' }}>
                  Méthode
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              <li>
                <a href="mailto:francois@taquae.com" style={{ color: colors.light, textDecoration: 'none' }}>
                  francois@taquae.com
                </a>
              </li>
              <li>Paris · Frankfurt</li>
            </ul>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: colors.mutedDark, display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2026 Taquae SASU · RCS Paris</span>
          <span>v1.0 · Lancement officiel 2027-01</span>
        </div>
      </div>
    </footer>
  );
};
