import type { Metadata } from 'next';
import { Navbar, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du site taquae.fr — traitement des données personnelles et conformité RGPD.',
  robots: { index: true, follow: true },
};

export default function Confidentialite() {
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
            RGPD
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
            Politique de confidentialité
          </h1>

          <div style={{ fontSize: '17px', lineHeight: 1.7, color: colors.ink }}>
            <p style={{ marginBottom: '40px', color: colors.mutedLight, fontStyle: 'italic' }}>
              Taquae SAS attache une importance particulière au respect de votre vie privée et de vos données
              personnelles. Cette politique décrit, en toute transparence, comment vos données sont collectées
              et utilisées sur le site taquae.fr.
            </p>

            <Section title="1. Responsable du traitement">
              <p>
                Le responsable du traitement des données est :
              </p>
              <ul>
                <li>Taquae SAS, RCS Paris 921 421 509</li>
                <li>10 rue du Colisée, 75008 Paris</li>
                <li>Représentée par sa Présidente, Madame Folasade Oyedele Meysembourg</li>
                <li>Contact : f.mey@taquae.eu</li>
              </ul>
            </Section>

            <Section title="2. Données collectées">
              <p>
                Le site taquae.fr ne collecte aucune donnée à l&apos;insu de ses visiteurs. Les seules données
                collectées le sont via le <strong>formulaire de contact</strong>, exclusivement à votre
                initiative :
              </p>
              <ul>
                <li>Nom</li>
                <li>Adresse email</li>
                <li>Société ou organisation (facultatif)</li>
                <li>Contenu de votre message</li>
              </ul>
            </Section>

            <Section title="3. Finalité du traitement">
              <p>
                Ces données sont collectées dans l&apos;unique objectif de répondre à votre demande de prise de
                contact. Elles ne sont utilisées à aucune autre fin : pas de prospection commerciale non
                sollicitée, pas de profilage, pas de revente, pas d&apos;intégration dans un outil de marketing
                automation.
              </p>
            </Section>

            <Section title="4. Base légale du traitement">
              <p>
                Le traitement repose sur votre <strong>consentement explicite</strong> (article 6.1.a du RGPD),
                matérialisé par l&apos;envoi volontaire du formulaire, ainsi que sur l&apos;exécution de mesures
                précontractuelles à votre demande (article 6.1.b du RGPD).
              </p>
            </Section>

            <Section title="5. Destinataires des données">
              <p>Vos données sont destinées exclusivement à :</p>
              <ul>
                <li>Taquae SAS, en sa qualité de responsable du traitement</li>
                <li>
                  Netlify, Inc., notre hébergeur et fournisseur du service de formulaire (Netlify Forms),
                  agissant comme sous-traitant au sens du RGPD
                </li>
              </ul>
              <p>
                Aucune donnée n&apos;est transmise à des tiers à des fins commerciales ou publicitaires.
              </p>
            </Section>

            <Section title="6. Transfert de données hors Union européenne">
              <p>
                Notre hébergeur Netlify, Inc. est une société américaine. Vos données sont susceptibles
                d&apos;être hébergées ou traitées aux États-Unis. Netlify s&apos;appuie sur les{' '}
                <strong>Clauses Contractuelles Types</strong> de la Commission européenne pour encadrer ces
                transferts, conformément aux articles 44 et suivants du RGPD.
              </p>
            </Section>

            <Section title="7. Durée de conservation">
              <p>
                Vos données sont conservées pour la durée strictement nécessaire au traitement de votre
                demande, et au maximum <strong>3 ans</strong> à compter de notre dernier échange, conformément
                aux recommandations de la CNIL pour la gestion de la relation prospect.
              </p>
            </Section>

            <Section title="8. Vos droits">
              <p>
                Conformément au Règlement général sur la protection des données (RGPD) et à la loi
                Informatique et Libertés, vous disposez à tout moment des droits suivants :
              </p>
              <ul>
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              <p>
                Pour exercer ces droits, écrivez-nous à{' '}
                <a href="mailto:f.mey@taquae.eu" style={linkStyle}>
                  f.mey@taquae.eu
                </a>
                . Nous nous engageons à répondre dans un délai maximum d&apos;un mois.
              </p>
              <p>
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
                adresser une réclamation à la CNIL :{' '}
                <a href="https://www.cnil.fr/fr/plaintes" style={linkStyle} target="_blank" rel="noreferrer noopener">
                  cnil.fr/fr/plaintes
                </a>
                .
              </p>
            </Section>

            <Section title="9. Cookies">
              <p>
                Le site taquae.fr ne dépose ni cookies de mesure d&apos;audience, ni cookies publicitaires, ni
                traceurs de réseaux sociaux. Seuls les cookies strictement nécessaires au fonctionnement
                technique du site et à la protection anti-spam du formulaire (Netlify Forms) sont susceptibles
                d&apos;être déposés.
              </p>
            </Section>

            <Section title="10. Sécurité">
              <p>
                Toutes les communications avec le site taquae.fr sont chiffrées via le protocole HTTPS
                (certificat SSL). Taquae SAS met en œuvre les mesures techniques et organisationnelles
                appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation
                ou destruction.
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
