import { colors, fonts } from '@/app/lib/design';

// Page d'attente. Site complet : git checkout site-complet-avant-attente -- app
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '22px',
        padding: '40px 20px',
        textAlign: 'center',
        background: colors.dark,
        color: '#ffffff',
        fontFamily: fonts.sans,
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '8px' }}>
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
          <span style={{ fontFamily: fonts.logo, fontSize: 'clamp(64px, 12vw, 104px)', lineHeight: 1, alignSelf: 'stretch' }}>
            Taquae
          </span>
          <span style={{ fontFamily: fonts.logo, fontSize: 'clamp(20px, 3.4vw, 30px)', color: colors.accent, marginTop: '6px', lineHeight: 1 }}>
            Consulting
          </span>
        </span>
        <span
          aria-hidden="true"
          style={{ width: '10px', height: '10px', borderRadius: '50%', background: colors.accent, display: 'inline-block', marginTop: '14px' }}
        />
      </div>

      <p style={{ fontSize: '20px', margin: '18px 0 0' }}>La stratégie IA avant la technologie.</p>
      <p style={{ fontSize: '15px', margin: 0 }}>Conseil · Accompagnement · Mise en œuvre</p>
      <p style={{ fontSize: '15px', margin: 0, color: colors.accent, fontWeight: 600 }}>
        Pour les PME industrielles et les organismes de développement
      </p>

      <span
        style={{
          marginTop: '14px',
          background: colors.accent,
          color: colors.ink,
          fontWeight: 700,
          padding: '10px 22px',
          borderRadius: '8px',
        }}
      >
        Site en construction
      </span>

      <p style={{ fontSize: '14px', margin: '10px 0 0' }}>Notre site sera bientôt disponible.</p>
      <p style={{ fontSize: '14px', margin: 0 }}>
        Pour nous joindre :{' '}
        <a href="mailto:f.mey@taquae.eu" style={{ color: colors.accent }}>
          f.mey@taquae.eu
        </a>
      </p>
    </main>
  );
}
