import type { Metadata } from 'next';
import { Navbar, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';

export const metadata: Metadata = {
  title: 'Message envoyé',
  description: 'Votre message a bien été transmis. Taquae vous répond sous 48 heures ouvrées maximum.',
  robots: { index: false, follow: false },
};

export default function Thanks() {
  return (
    <div style={{ fontFamily: fonts.sans, background: colors.dark, color: colors.light, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px clamp(20px, 4vw, 56px) 80px',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: fonts.mono,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: colors.accent,
              marginBottom: '32px',
            }}
          >
            <span style={{ width: '28px', height: '1px', background: colors.accent, display: 'block' }} />
            Message reçu
          </span>

          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 6vw, 84px)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              color: colors.light,
              maxWidth: '16ch',
            }}
          >
            Merci, votre message est <em style={{ fontStyle: 'italic', fontWeight: 300, color: colors.accent }}>bien arrivé</em>.
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px, 1.5vw, 20px)',
              lineHeight: 1.55,
              maxWidth: '56ch',
              color: colors.mutedDark,
              marginBottom: '40px',
            }}
          >
            Je reviens vers vous personnellement sous 48 heures ouvrées maximum, à l&apos;adresse email que
            vous avez indiquée. Si votre demande est urgente, vous pouvez également m&apos;écrire directement à{' '}
            <a
              href="mailto:f.mey@taquae.eu"
              style={{
                color: colors.light,
                textDecoration: 'underline',
                textDecorationColor: colors.accent,
                textUnderlineOffset: '3px',
              }}
            >
              f.mey@taquae.eu
            </a>
            .
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                fontFamily: fonts.sans,
                fontSize: '14px',
                fontWeight: 500,
                background: colors.accent,
                color: colors.dark,
                border: `1px solid ${colors.accent}`,
                borderRadius: '999px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              ← Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
