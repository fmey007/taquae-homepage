import type { Metadata } from 'next';
import { Navbar, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';

export const metadata: Metadata = {
  title: 'Doing Business in Ghana — Taquae case study',
  description:
    'How Taquae turns a paper investor guide into a living editorial ecosystem, updated by an AI agent, under systematic human validation.',
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
    title: 'Paper brochure',
    desc: 'Fixed at print time. Targeted 2-3 year lifespan, like the original 2024 edition.',
  },
  {
    label: 'L1′',
    title: 'Mirror layer',
    desc: 'Visually faithful digital reproduction of the paper page, updated and signed quarterly. Shows “up to date” until something changes. Coming soon.',
    upcoming: true,
  },
  {
    label: 'L2',
    title: 'Editor content',
    desc: 'Web pages under editorial control, stable URLs targeted by the paper QR codes. Absorbs the volatility of external sources.',
  },
  {
    label: 'L3',
    title: 'External sources',
    desc: 'Government and institutional sites, volatile by nature: GIPC, GRA, World Bank, etc.',
  },
  {
    label: 'AI',
    title: 'Watch agent',
    desc: 'Monitors sources, detects discrepancies across layers L1 to L3 and proposes updates. Never publishes on its own.',
  },
  {
    label: 'B2B',
    title: 'Matchmaking',
    desc: 'Anonymous matchmaking between foreign investors, Ghanaian companies and institutions, aimed at boosting trade and economic development.',
    upcoming: true,
  },
];

const stackLabel = 'AI used';

export default function DoingBusinessGhanaEN() {
  return (
    <div style={{ fontFamily: fonts.sans, background: colors.paper, color: colors.ink }}>
      <Navbar locale="en" />

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
            Taquae case study · In progress
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
            The investor guide that keeps <em style={{ fontStyle: 'italic', fontWeight: 300 }}>itself up to date</em>.
          </h1>

          <p style={{ fontSize: 'clamp(17px, 1.4vw, 21px)', lineHeight: 1.5, maxWidth: '58ch', color: colors.mutedDark, marginBottom: '40px' }}>
            Doing Business in Ghana is a 68-page investor guide I wrote and edited in 2024 with the support of GIZ and 10 bilateral chambers of commerce in Accra. Its V2 adds an AI-driven update layer, under systematic human validation.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section style={{ padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span style={{ ...badgeStyle, color: colors.mutedLight, marginBottom: '24px' }}>
            <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
            — The problem
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
              A paper brochure doesn&apos;t lie. It just goes obsolete.
            </h2>
            <div style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '58ch' }}>
              <p style={{ marginBottom: '20px' }}>
                The V1 of this guide pointed, via QR codes, to an online layer hosted by a local partner. The hosting wasn&apos;t renewed after the mission ended, and the layer went down. Every QR code in the brochures already distributed now points into the void.
              </p>
              <p style={{ color: colors.mutedLight }}>
                It&apos;s a classic case: high-quality institutional content undermined not by its substance but by an operational dependency that didn&apos;t survive the end of the funding.
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
            — The answer
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
            An architecture that separates what lasts from what changes.
          </h2>
          <p style={{ fontSize: '18px', color: colors.mutedDark, maxWidth: '60ch', marginBottom: '56px' }}>
            Several content layers, plus an AI agent that never publishes without human validation — the same rigour as a Michelin guide.
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
                      Coming soon
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

      {/* Status + stack */}
      <section style={{ padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
            <div>
              <span style={{ ...badgeStyle, color: colors.mutedLight, marginBottom: '24px' }}>
                <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
                — Progress
              </span>
              <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.1, marginBottom: '20px', maxWidth: '18ch' }}>
                New print edition planned for January 2027.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: colors.mutedLight, maxWidth: '52ch' }}>
                The new brochure is built into a hybrid concept designed to be “never obsolete”: every chapter moves from draft to published through an explicit editorial workflow, never auto-published. An anonymous matchmaking platform between foreign investors and Ghanaian companies is being scoped with a local partner in Accra.
              </p>
            </div>
            <div>
              <span style={{ ...badgeStyle, color: colors.mutedLight, marginBottom: '24px' }}>
                <span style={{ width: '28px', height: '1px', background: colors.mutedLight, display: 'block' }} />
                — {stackLabel}
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

      {/* Why it matters */}
      <section style={{ background: colors.dark, color: colors.light, padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)' }}>
          <span style={{ ...badgeStyle, color: colors.mutedDark, marginBottom: '24px' }}>
            <span style={{ width: '28px', height: '1px', background: colors.mutedDark, display: 'block' }} />
            — Why this project
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'start' }}>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '18ch' }}>
              A live demonstrator, not a toy prototype.
            </h2>
            <div style={{ fontSize: '17px', lineHeight: 1.7, color: colors.mutedDark, maxWidth: '58ch' }}>
              <p style={{ marginBottom: '20px' }}>
                That&apos;s what makes this project worth showing: it proves that a real case, with institutional history and sensitive content, can be rebuilt with modern web tools, a controlled AI agent, and an editorial discipline that never sacrifices human validation.
              </p>
              <p>
                The same principle is replicable for other countries or other development organisations that produced high-quality institutional content, but whose digital layer didn&apos;t survive.
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
              See the V2 demonstrator →
            </a>
            <a
              href="/en#contact"
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
              Discuss a similar project
            </a>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </div>
  );
}
