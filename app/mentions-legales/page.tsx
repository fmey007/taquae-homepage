import type { Metadata } from 'next';
import { Navbar, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site taquae.fr — éditeur, hébergeur, propriété intellectuelle et conditions d\'utilisation.',
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <div style={{ fontFamily: fonts.sans, background: colors.paper, color: colors.ink }}>
      <Navbar />

      <main style={{ paddingTop: '120px', paddingBottom: 'clamp(80px, 10vw, 140px)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: fonts.mono,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: colors.mutedLight,
              marginBottom: '24px',
            }}
          >
            <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
            Informations légales
          </span>

          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(36px, 5.2vw, 64px)',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              marginBottom: '48px',
            }}
          >
            Mentions légales
          </h1>

          <div style={{ fontSize: '17px', lineHeight: 1.7, color: colors.ink }}>
            <Section title="Éditeur du site">
              <p>
                Le site <strong>taquae.fr</strong> est édité par la société <strong>Taquae</strong>, société par
                actions simplifiée (SAS) au capital de 1 000 €.
              </p>
              <ul>
                <li>Siège social : 10 rue du Colisée, 75008 Paris</li>
                <li>RCS Paris : 921 421 509</li>
                <li>SIRET : 921 421 509 00018</li>
                <li>Code APE : 7022Z (Conseil pour les affaires et autres conseils de gestion)</li>
                <li>Email : f.mey@taquae.eu</li>
              </ul>
            </Section>

            <Section title="Directrice de la publication">
              <p>
                Madame Folasade Oyedele Meysembourg, Présidente de Taquae SAS.
              </p>
            </Section>

            <Section title="Hébergement">
              <p>
                Le site est hébergé par <strong>Netlify, Inc.</strong>, 512 2nd Street, Suite 200, San Francisco,
                CA 94107, États-Unis. Site web :{' '}
                <a href="https://www.netlify.com" style={linkStyle}>
                  netlify.com
                </a>
                .
              </p>
            </Section>

            <Section title="Conception et réalisation">
              <p>
                Site conçu et développé en interne par Taquae.
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur le site taquae.fr (textes, images, logos, identité
                visuelle, structure éditoriale) est la propriété exclusive de Taquae SAS, sauf mention contraire.
                Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle, sans
                autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par les
                articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
              <p>
                La marque <strong>Taquae</strong> et le wordmark associé sont la propriété de Taquae SAS.
              </p>
            </Section>

            <Section title="Données personnelles">
              <p>
                Le traitement des données personnelles collectées via le formulaire de contact du site est régi
                par notre{' '}
                <a href="/politique-confidentialite" style={linkStyle}>
                  politique de confidentialité
                </a>
                .
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Le site taquae.fr ne dépose aucun cookie de mesure d&apos;audience ni de traçage publicitaire.
                Seuls les cookies strictement nécessaires au fonctionnement du site et à la sécurité (anti-spam
                Netlify Forms) sont susceptibles d&apos;être déposés. Aucun consentement préalable n&apos;est
                donc requis.
              </p>
            </Section>

            <Section title="Liens externes">
              <p>
                Le site peut contenir des liens vers des sites tiers. Taquae SAS n&apos;exerce aucun contrôle
                sur ces sites et ne saurait être tenue responsable de leurs contenus, pratiques ou politiques de
                confidentialité.
              </p>
            </Section>

            <Section title="Droit applicable et juridiction compétente">
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif au site
                taquae.fr relève de la compétence exclusive des tribunaux du ressort de Paris.
              </p>
            </Section>

            <p style={{ marginTop: '64px', fontSize: '14px', color: colors.mutedLight, fontStyle: 'italic' }}>
              Dernière mise à jour : juin 2026.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const linkStyle = {
  color: colors.ink,
  textDecoration: 'underline',
  textDecorationColor: colors.accent,
  textUnderlineOffset: '3px',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: '24px',
          fontWeight: 500,
          marginBottom: '16px',
          letterSpacing: '-0.015em',
        }}
      >
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>{children}</div>
    </section>
  );
}
