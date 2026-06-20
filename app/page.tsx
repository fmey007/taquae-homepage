import { Navbar, Hero, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: fonts.sans, background: colors.paper, color: colors.ink }}>
      <Navbar />

      {/* Hero */}
      <Hero>
        <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '32px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: fonts.mono,
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: colors.mutedDark,
              }}
            >
              <span style={{ width: '28px', height: '1px', background: colors.mutedDark, display: 'block' }} />
              Lancement officiel · janv. 2027
            </span>
          </div>

          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(48px, 8.4vw, 132px)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
              marginBottom: '32px',
              color: colors.light,
              maxWidth: '14ch',
            }}
          >
            Exploiter <em style={{ fontStyle: 'italic', fontWeight: 300 }}>l&apos;IA</em>
            <br />
            sans risque : <span style={{ color: colors.accent }}>stratégie</span> avant technologie.
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px, 1.5vw, 22px)',
              lineHeight: 1.45,
              maxWidth: '56ch',
              color: colors.mutedDark,
              marginBottom: '48px',
            }}
          >
            Conseil de fond pour PME industrielles et organisations du développement qui veulent intégrer l&apos;IA — vite, juste, et sans dépendance technologique.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="mailto:f.mey@taquae.eu?subject=Demande%20de%20diagnostic%20IA%20gratuit&body=Bonjour%20Fran%C3%A7ois%2C%0A%0AJe%20souhaite%20demander%20un%20diagnostic%20IA%20gratuit%20pour%20mon%20organisation.%0A%0AContexte%20%3A%0A%0A"
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
              Demander un diagnostic gratuit
              <span>→</span>
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                fontFamily: fonts.sans,
                fontSize: '14px',
                fontWeight: 500,
                background: 'transparent',
                color: colors.light,
                border: `1px solid ${colors.ruleLight}`,
                borderRadius: '999px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Notre approche
            </a>
          </div>
        </div>
      </Hero>

      {/* Services Section */}
      <section
        style={{
          background: colors.paper,
          color: colors.ink,
          padding: 'clamp(80px, 10vw, 140px) 0',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <div style={{ marginBottom: 'clamp(40px, 6vw, 88px)' }}>
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
              }}
            >
              <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
              — 01 / Services
            </span>
          </div>

          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(36px, 5.2vw, 76px)',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              marginBottom: '24px',
              maxWidth: '20ch',
            }}
          >
            Trois manières d&apos;avancer <em style={{ fontStyle: 'italic', fontWeight: 300 }}>avec méthode</em>.
          </h2>

          <p style={{ fontSize: '18px', color: colors.mutedLight, maxWidth: '56ch', marginBottom: '64px' }}>
            De l&apos;audit ponctuel à la mise en œuvre opérationnelle : un format adapté à chaque maturité.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Audit IA', desc: 'Pour les PME qui veulent identifier précisément où l&apos;IA crée de la valeur — et où elle introduit du risque.' },
              { title: 'Accompagnement stratégique', desc: 'Intégrer l&apos;IA dans la stratégie long terme : vision, budget, gouvernance, montée en compétence.' },
              { title: 'Mise en œuvre technique', desc: 'Démarrer un projet IA avec un appui expert : delivery, intégration, et transfert de compétences à vos équipes.' },
            ].map((service) => (
              <div key={service.title} style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: '24px', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '16px', color: colors.mutedLight, lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          background: colors.dark,
          color: colors.light,
          padding: 'clamp(80px, 10vw, 140px) 0',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <div style={{ marginBottom: 'clamp(40px, 6vw, 88px)' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: fonts.mono,
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: colors.mutedDark,
              }}
            >
              <span style={{ width: '28px', height: '1px', background: colors.mutedDark, display: 'block' }} />
              — 02 / Contact
            </span>
          </div>

          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(36px, 5.2vw, 76px)',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              marginBottom: '24px',
              maxWidth: '20ch',
            }}
          >
            Premier échange de <em style={{ fontStyle: 'italic', fontWeight: 300 }}>30 minutes</em>, sans engagement.
          </h2>

          <p style={{ fontSize: '18px', color: colors.mutedDark, maxWidth: '56ch', marginBottom: '64px' }}>
            Une conversation directe pour comprendre votre contexte, identifier où l&apos;IA peut créer de la valeur dans votre organisation, et voir si on est faits pour travailler ensemble.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px' }}>
            {/* Formulaire Netlify */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/?contact=ok#contact"
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Ne pas remplir : <input name="bot-field" />
                </label>
              </p>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontFamily: fonts.mono, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark }}>
                  Nom
                </span>
                <input
                  type="text"
                  name="nom"
                  required
                  style={{
                    background: 'transparent',
                    border: `1px solid ${colors.ruleDark}`,
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: colors.light,
                    fontSize: '15px',
                    fontFamily: fonts.sans,
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontFamily: fonts.mono, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark }}>
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    background: 'transparent',
                    border: `1px solid ${colors.ruleDark}`,
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: colors.light,
                    fontSize: '15px',
                    fontFamily: fonts.sans,
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontFamily: fonts.mono, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark }}>
                  Société / Organisation
                </span>
                <input
                  type="text"
                  name="societe"
                  style={{
                    background: 'transparent',
                    border: `1px solid ${colors.ruleDark}`,
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: colors.light,
                    fontSize: '15px',
                    fontFamily: fonts.sans,
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontFamily: fonts.mono, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark }}>
                  Votre contexte / question
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  style={{
                    background: 'transparent',
                    border: `1px solid ${colors.ruleDark}`,
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: colors.light,
                    fontSize: '15px',
                    fontFamily: fonts.sans,
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '16px 24px',
                  fontFamily: fonts.sans,
                  fontSize: '14px',
                  fontWeight: 500,
                  background: colors.accent,
                  color: colors.dark,
                  border: `1px solid ${colors.accent}`,
                  borderRadius: '999px',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
              >
                Envoyer →
              </button>
            </form>

            {/* Coordonnées */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark, marginBottom: '8px' }}>
                  Email
                </div>
                <a href="mailto:f.mey@taquae.eu" style={{ color: colors.light, fontSize: '18px', textDecoration: 'none', borderBottom: `1px solid ${colors.accent}`, paddingBottom: '2px' }}>
                  f.mey@taquae.eu
                </a>
              </div>

              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark, marginBottom: '8px' }}>
                  Présence
                </div>
                <div style={{ fontSize: '18px', lineHeight: 1.6 }}>
                  Paris · Accra · Lagos
                </div>
                <div style={{ fontSize: '14px', color: colors.mutedDark, marginTop: '4px' }}>
                  Présence Afrique de l&apos;Ouest via partenariat Africon
                </div>
              </div>

              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark, marginBottom: '8px' }}>
                  Réponse
                </div>
                <div style={{ fontSize: '15px', color: colors.mutedDark, lineHeight: 1.6, maxWidth: '40ch' }}>
                  Je réponds personnellement à tous les messages, sous 48 heures ouvrées maximum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
