import type { Metadata } from 'next';
import { Navbar, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';

export const metadata: Metadata = {
  title: 'Doing Business in Ghana — Cas d’usage Taquae',
  description:
    'Comment Taquae transforme un guide investisseurs papier en écosystème éditorial vivant, actualisé par agent IA, sous validation humaine systématique.',
  robots: { index: true, follow: true },
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: fonts.mono,
  fontSize: '12px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
};

const stackItems = [
  { name: 'Astro', slug: 'astro' },
  { name: 'Sanity', slug: 'sanity' },
  { name: 'Cloudflare Pages', slug: 'cloudflare' },
  { name: 'Claude API', slug: 'anthropic' },
  { name: 'Make', slug: 'make' },
];

const layers = [
  {
    label: 'L1',
    title: 'Brochure papier',
    desc: 'Figée à l’impression. Visée 2-3 ans de durée de vie, comme l’édition originale 2024.',
  },
  {
    label: 'L1′',
    title: 'Couche miroir',
    desc: 'Reproduction visuelle fidèle de la page papier, mise à jour trimestrielle et signée. Affiche « à jour » tant que rien n’a changé. À venir.',
    upcoming: true,
  },
  {
    label: 'L2',
    title: 'Contenu éditeur',
    desc: 'Pages web sous contrôle, URLs stables pointées par les QR codes papier. Absorbe la volatilité des sources externes.',
  },
  {
    label: 'L3',
    title: 'Sources externes',
    desc: 'Sites gouvernementaux et institutionnels, volatiles par nature : GIPC, GRA, Banque mondiale, etc.',
  },
  {
    label: 'IA',
    title: 'Agent de veille',
    desc: 'Surveille les sources, détecte les écarts dans les couches L1 à L3 et propose des mises à jour. Ne publie jamais seul.',
  },
  {
    label: 'B2B',
    title: 'Matchmaking',
    desc: 'Mise en relation anonyme entre investisseurs étrangers, entreprises et institutions ghanéennes visant à dynamiser les échanges et le développement économique.',
    upcoming: true,
  },
];

export default function DoingBusinessGhana() {
  return (
    <div style={{ fontFamily: fonts.sans, background: colors.paper, color: colors.ink }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: colors.dark,
          color: colors.light,
          paddingTop: '140px',
          paddingBottom: 'clamp(72px, 9vw, 120px)',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span style={{ ...badgeStyle, color: colors.accent, marginBottom: '24px' }}>
            <span style={{ width: '28px', height: '1px', background: colors.accent, display: 'block' }} />
            Cas d&apos;usage Taquae · En cours
          </span>

          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 6.5vw, 96px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              maxWidth: '20ch',
            }}
          >
            Le guide investisseurs qui se met <em style={{ fontStyle: 'italic', fontWeight: 300 }}>à jour lui-même</em>.
          </h1>

          <p style={{ fontSize: 'clamp(17px, 1.4vw, 21px)', lineHeight: 1.5, maxWidth: '58ch', color: colors.mutedDark, marginBottom: '40px' }}>
            Doing Business in Ghana est un guide investisseurs de 68 pages que j&apos;ai rédigé et édité en 2024 avec le concours de la GIZ et de 10 chambres de commerce bilatérales à Accra. Sa V2 ajoute une couche d&apos;actualisation pilotée par IA, sous validation humaine systématique.
          </p>
        </div>
      </section>

      {/* Le problème */}
      <section style={{ padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span style={{ ...badgeStyle, color: colors.mutedLight, marginBottom: '24px' }}>
            <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
            — Le problème
          </span>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                maxWidth: '18ch',
              }}
            >
              Une brochure papier ne ment pas. Elle devient juste obsolète.
            </h2>
            <div style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '58ch' }}>
              <p style={{ marginBottom: '20px' }}>
                La V1 de ce guide pointait, via QR codes, vers une couche en ligne hébergée par un partenaire local. L&apos;hébergement n&apos;a pas été repayé après la fin de la mission, et la couche est tombée. Tous les QR codes des brochures déjà distribuées pointent aujourd&apos;hui dans le vide.
              </p>
              <p style={{ color: colors.mutedLight }}>
                C&apos;est un classique : un contenu institutionnel de qualité, sapé non par le fond mais par une dépendance opérationnelle qui n&apos;a pas survécu à la fin du financement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section style={{ background: colors.dark, color: colors.light, padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span style={{ ...badgeStyle, color: colors.mutedDark, marginBottom: '24px' }}>
            <span style={{ width: '28px', height: '1px', background: colors.mutedDark, display: 'block' }} />
            — La réponse
          </span>

          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              maxWidth: '20ch',
            }}
          >
            Une architecture qui sépare ce qui dure de ce qui change.
          </h2>
          <p style={{ fontSize: '18px', color: colors.mutedDark, maxWidth: '60ch', marginBottom: '56px' }}>
            Trois couches de contenu, plus un agent IA qui ne publie jamais sans validation humaine — le même principe de rigueur qu&apos;un guide Michelin.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {layers.map((layer) => (
              <div
                key={layer.label}
                style={{
                  padding: '28px 24px',
                  border: `1px solid ${colors.ruleDark}`,
                  borderRadius: '2px',
                  opacity: layer.upcoming ? 0.7 : 1,
                  borderStyle: layer.upcoming ? 'dashed' : 'solid',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: '12px', letterSpacing: '0.1em', color: colors.accent }}>
                    {layer.label}
                  </span>
                  {layer.upcoming && (
                    <span style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.mutedDark }}>
                      À venir
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: fonts.display, fontSize: '20px', marginBottom: '10px' }}>{layer.title}</h3>
                <p style={{ fontSize: '14px', color: colors.mutedDark, lineHeight: 1.6 }}>{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statut + stack */}
      <section style={{ padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
            <div>
              <span style={{ ...badgeStyle, color: colors.mutedLight, marginBottom: '24px' }}>
                <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
                — État d&apos;avancement
              </span>
              <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, marginBottom: '20px', maxWidth: '18ch' }}>
                Réédition de la brochure prévue en janvier 2027.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: colors.mutedLight, maxWidth: '52ch' }}>
                La nouvelle brochure est intégrée dans un concept hybride qui se veut « never obsolete » : chaque chapitre passe de brouillon à publié dans un workflow éditorial explicite, jamais d&apos;auto-publication. Une plateforme de mise en relation anonyme entre investisseurs étrangers et entreprises ghanéennes est en cours de cadrage avec un partenaire local à Accra.
              </p>
            </div>
            <div>
              <span style={{ ...badgeStyle, color: colors.mutedLight, marginBottom: '24px' }}>
                <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
                — IA utilisée
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {stackItems.map((item) => (
                  <span
                    key={item.slug}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 18px',
                      border: `1px solid ${colors.ruleLight}`,
                      borderRadius: '2px',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${item.slug}`}
                      alt=""
                      width={20}
                      height={20}
                      style={{ display: 'block' }}
                    />
                    <span style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.ink }}>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi ça compte */}
      <section style={{ background: colors.dark, color: colors.light, padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span style={{ ...badgeStyle, color: colors.mutedDark, marginBottom: '24px' }}>
            <span style={{ width: '28px', height: '1px', background: colors.mutedDark, display: 'block' }} />
            — Pourquoi ce projet
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'start' }}>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '18ch' }}>
              Un démonstrateur, pas un prototype jouet.
            </h2>
            <div style={{ fontSize: '17px', lineHeight: 1.7, color: colors.mutedDark, maxWidth: '58ch' }}>
              <p style={{ marginBottom: '20px' }}>
                C&apos;est ce qui rend ce projet utile à montrer : il prouve qu&apos;un cas réel, avec un historique institutionnel et un contenu sensible, peut être repris avec des outils web modernes, un agent IA contrôlé, et une discipline éditoriale qui ne sacrifie jamais la validation humaine.
              </p>
              <p>
                Le même principe est réplicable pour d&apos;autres pays ou d&apos;autres organismes de développement qui ont produit du contenu institutionnel de qualité, mais dont la couche numérique n&apos;a pas survécu.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '56px' }}>
            <a
              href="https://investinghana.online"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 28px',
                background: colors.accent,
                color: colors.ink,
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                borderRadius: '2px',
              }}
            >
              Voir le démonstrateur V2 →
            </a>
            <a
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 28px',
                border: `1px solid ${colors.ruleDark}`,
                color: colors.light,
                fontSize: '15px',
                textDecoration: 'none',
                borderRadius: '2px',
              }}
            >
              Discuter d&apos;un projet similaire
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
