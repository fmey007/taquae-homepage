import { colors, fonts } from '@/app/lib/design';

interface FooterProps {
  locale?: 'fr' | 'en';
}

const copy = {
  fr: {
    tagline: 'Conseil en stratégie IA pour PME et organismes de développement. Paris · Accra · Lagos.',
    services: 'Services',
    audit: 'Audit IA',
    accompagnement: 'Accompagnement',
    miseEnOeuvre: 'Mise en œuvre',
    caseStudy: 'Cas d’usage : Doing Business in Ghana',
    home: '/',
    caseHref: '/doing-business-ghana',
    cabinet: 'Cabinet',
    about: 'À propos',
    contact: 'Contact',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    contactTitle: 'Contact',
    presence: 'Paris · Accra · Lagos',
    rights: '© 2026 Taquae SAS · RCS Paris 921 421 509 · Capital 1 000 €',
    version: 'v1.0 · Lancement officiel 2027-01',
  },
  en: {
    tagline: 'AI strategy consulting for SMEs and development organisations. Paris · Accra · Lagos.',
    services: 'Services',
    audit: 'AI Audit',
    accompagnement: 'Strategic advisory',
    miseEnOeuvre: 'Implementation',
    caseStudy: 'Case study: Doing Business in Ghana',
    home: '/en',
    caseHref: '/en/doing-business-ghana',
    cabinet: 'Firm',
    about: 'About',
    contact: 'Contact',
    legal: 'Legal notice',
    privacy: 'Privacy',
    contactTitle: 'Contact',
    presence: 'Paris · Accra · Lagos',
    rights: '© 2026 Taquae SAS · RCS Paris 921 421 509 · Capital €1,000',
    version: 'v1.0 · Official launch 2027-01',
  },
};

export const Footer = ({ locale = 'fr' }: FooterProps) => {
  const t = copy[locale];
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
              {t.tagline}
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
              {t.services}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>
                <a href={`${t.home}#services`} style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.audit}
                </a>
              </li>
              <li>
                <a href={`${t.home}#services`} style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.accompagnement}
                </a>
              </li>
              <li>
                <a href={`${t.home}#services`} style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.miseEnOeuvre}
                </a>
              </li>
              <li>
                <a href={t.caseHref} style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.caseStudy}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
              {t.cabinet}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>
                <a href={`${t.home}#about`} style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.about}
                </a>
              </li>
              <li>
                <a href={`${t.home}#contact`} style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.contact}
                </a>
              </li>
              <li>
                <a href="/mentions-legales" style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.legal}
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" style={{ color: colors.light, textDecoration: 'none' }}>
                  {t.privacy}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>
              {t.contactTitle}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>
                <a href="mailto:f.mey@taquae.eu" style={{ color: colors.light, textDecoration: 'none' }}>
                  f.mey@taquae.eu
                </a>
              </li>
              <li>{t.presence}</li>
            </ul>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: colors.mutedDark, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span>{t.rights}</span>
          <span>{t.version}</span>
        </div>
      </div>
    </footer>
  );
};
