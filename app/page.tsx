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
            Conseil de fond pour PME industrielles et organismes de développement qui veulent intégrer l&apos;IA — vite, juste, et sans dépendance technologique.
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

          <div style={{ marginTop: '48px' }}>
            <a
              href="/doing-business-ghana"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                color: colors.ink,
                textDecoration: 'underline',
                textDecorationColor: colors.accent,
                textUnderlineOffset: '3px',
              }}
            >
              Voir un cas d&apos;usage en cours : Doing Business in Ghana →
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          background: colors.dark,
          color: colors.light,
          padding: 'clamp(80px, 10vw, 140px) 0',
          borderTop: `1px solid ${colors.ruleDark}`,
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
              — 02 / À propos
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'start' }}>
            <div>
              <h2
                style={{
                  fontFamily: fonts.display,
                  fontSize: 'clamp(36px, 5.2vw, 76px)',
                  lineHeight: 1,
                  letterSpacing: '-0.025em',
                  marginBottom: '32px',
                  maxWidth: '18ch',
                }}
              >
                Vingt-cinq ans de <em style={{ fontStyle: 'italic', fontWeight: 300 }}>terrain</em> avant la stratégie IA.
              </h2>

              <figure style={{ margin: '0 0 32px 0' }}>
                <div style={{ position: 'relative', aspectRatio: '3 / 4', width: '100%', maxWidth: '460px', overflow: 'hidden', borderRadius: '2px' }}>
                  <Image
                    src="/images/ghana-cacao-solaire.jpg"
                    alt="François Meysembourg sur le terrain au Ghana, devant un système d'irrigation solaire installé pour une plantation de cacao"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    style={{ objectFit: 'cover' }}
                    loading="eager"
                  />
                </div>
                <figcaption style={{ marginTop: '12px', fontSize: '13px', color: colors.mutedDark, lineHeight: 1.5, maxWidth: '460px', fontStyle: 'italic' }}>
                  Ghana, 2023. Système d&apos;irrigation solaire pilote pour une plantation de cacao, accompagnement au montage financier pour reproduire le modèle sur 200 ha et mutualiser les petits planteurs n&apos;ayant pas la surface financière pour porter seuls l&apos;irrigation de leur plantation.
                </figcaption>
              </figure>

              <div style={{ fontFamily: fonts.mono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark, marginBottom: '12px' }}>
                François Meysembourg, fondateur
              </div>
              <div style={{ fontSize: '15px', color: colors.mutedDark, lineHeight: 1.6 }}>
                Ingénieur binational France · Allemagne (ISFATES - DFHI)<br />
                Basé dans le Grand Est · Présence en Afrique de l&apos;Ouest
              </div>
            </div>

            <div style={{ fontSize: '17px', lineHeight: 1.7, color: colors.light, maxWidth: '60ch' }}>
              <p style={{ marginBottom: '24px' }}>
                J&apos;ai passé l&apos;essentiel de ma carrière dans des PME et ETI industrielles — automotive, bois, biens de grande distribution — en Europe de l&apos;Ouest et aux États-Unis. Des entreprises qui produisent, qui exportent, qui se battent avec leurs marges et leurs process.
              </p>
              <p style={{ marginBottom: '24px' }}>
                J&apos;ai dirigé une équipe spécialisée en localisation d&apos;entreprise dans le développement de projets internationaux au sein d&apos;EY, puis passé six ans en Afrique de l&apos;Ouest, à la GIZ au Ghana, détaché au Ghana Investment Promotion Centre. Mon métier : restructurer des équipes et aider des projets d&apos;investissement à boucler leur financement en combinant subventions bilatérales, prêts commerciaux et fonds propres. J&apos;y ai appris une chose : ce qui décide d&apos;un projet n&apos;est jamais la technologie. C&apos;est la stratégie, la rigueur de l&apos;exécution, et la capacité à mesurer ce qui change vraiment.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Taquae est né de ce constat : l&apos;IA va bouleverser les PME comme l&apos;informatique l&apos;a fait il y a quarante ans. Mais sans stratégie, sans cadrage, sans mesure d&apos;impact, c&apos;est de l&apos;argent qui part en fumée. Mon ambition est d&apos;apporter cette discipline-là à des dirigeants qui sentent que l&apos;IA peut transformer leur entreprise mais ne savent pas par où commencer.
              </p>
              <p style={{ color: colors.mutedDark, fontSize: '15px', fontStyle: 'italic' }}>
                Lancement opérationnel de Taquae prévu début 2027.
              </p>
            </div>
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
              — 03 / Contact
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
            {/* Formulaire Formspree */}
            <form
              name="contact"
              method="POST"
              action="https://formspree.io/f/mdargejb"
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <input type="hidden" name="_next" value="https://taquae.fr/thanks" />
              <input type="hidden" name="_subject" value="Nouveau message — taquae.fr" />
              <p hidden>
                <label>
                  Ne pas remplir : <input name="_gotcha" />
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
