import { colors, fonts } from '@/app/lib/design';

interface NavbarProps {
  locale?: 'fr' | 'en';
}

const copy = {
  fr: { home: '/', services: 'Services', about: 'À propos', contact: 'Contact', ariaHome: 'Taquae Consulting — Accueil' },
  en: { home: '/en', services: 'Services', about: 'About', contact: 'Contact', ariaHome: 'Taquae Consulting — Home' },
};

export const Navbar = ({ locale = 'fr' }: NavbarProps) => {
  const t = copy[locale];
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
          href={t.home}
          aria-label={t.ariaHome}
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
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
          <li>
            <a href={`${t.home}#services`} style={{ color: colors.light, textDecoration: 'none' }}>
              {t.services}
            </a>
          </li>
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
          <li style={{ display: 'flex', gap: '8px', fontFamily: fonts.mono, fontSize: '12px' }}>
            <a href="/" style={{ color: locale === 'fr' ? colors.accent : colors.mutedDark, textDecoration: 'none' }}>
              FR
            </a>
            <span style={{ color: colors.mutedDark }}>/</span>
            <a href="/en" style={{ color: locale === 'en' ? colors.accent : colors.mutedDark, textDecoration: 'none' }}>
              EN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
