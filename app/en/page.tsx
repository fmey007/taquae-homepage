import type { Metadata } from 'next';
import { Navbar, Hero, Footer } from '@/app/components';
import { colors, fonts } from '@/app/lib/design';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Taquae Consulting — AI strategy for SMEs',
  description:
    'AI strategy consulting for industrial SMEs and development organisations: audit, strategic advisory, hands-on implementation.',
  robots: { index: true, follow: true },
};

export default function HomeEN() {
  return (
    <div style={{ fontFamily: fonts.sans, background: colors.paper, color: colors.ink }}>
      <Navbar locale="en" />

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
              Official launch · Jan. 2027
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
            Use <em style={{ fontStyle: 'italic', fontWeight: 300 }}>AI</em>
            <br />
            without the risk: <span style={{ color: colors.accent }}>strategy</span> before technology.
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
            Substantive consulting for industrial SMEs and development organisations who want to adopt AI — fast, right, and without technology lock-in.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="mailto:f.mey@taquae.eu?subject=Free%20AI%20diagnostic%20request&body=Hi%20Fran%C3%A7ois%2C%0A%0AI%27d%20like%20to%20request%20a%20free%20AI%20diagnostic%20for%20my%20organisation.%0A%0AContext%3A%0A%0A"
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
              Request a free diagnostic
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
              Our approach
            </a>
          </div>
        </div>
      </Hero>

      {/* Services Section */}
      <section
        id="services"
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
            Three ways to move forward <em style={{ fontStyle: 'italic', fontWeight: 300 }}>with method</em>.
          </h2>

          <p style={{ fontSize: '18px', color: colors.mutedLight, maxWidth: '56ch', marginBottom: '64px' }}>
            From a one-off audit to hands-on delivery: a format suited to wherever you stand today.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'AI Audit', desc: 'For SMEs who want to pinpoint exactly where AI creates value — and where it introduces risk.' },
              { title: 'Strategic advisory', desc: 'Embed AI into long-term strategy: vision, budget, governance, upskilling.' },
              { title: 'Implementation', desc: 'Kick off an AI project with expert support: delivery, integration, and skills transfer to your team.' },
            ].map((service) => (
              <div key={service.title} style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: '24px', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '16px', color: colors.mutedLight, lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <a
              href="/en/doing-business-ghana"
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
              See a live case study: Doing Business in Ghana →
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
              — 02 / About
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
                Twenty-five years on the <em style={{ fontStyle: 'italic', fontWeight: 300 }}>ground</em> before AI strategy.
              </h2>

              <figure style={{ margin: '0 0 32px 0' }}>
                <div style={{ position: 'relative', aspectRatio: '3 / 4', width: '100%', maxWidth: '460px', overflow: 'hidden', borderRadius: '2px' }}>
                  <Image
                    src="/images/ghana-cacao-solaire.jpg"
                    alt="François Meysembourg in the field in Ghana, in front of a solar irrigation system installed for a cocoa plantation"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    style={{ objectFit: 'cover' }}
                    loading="eager"
                  />
                </div>
                <figcaption style={{ marginTop: '12px', fontSize: '13px', color: colors.mutedDark, lineHeight: 1.5, maxWidth: '460px', fontStyle: 'italic' }}>
                  Ghana, 2023. Pilot solar irrigation system for a cocoa plantation, financial structuring support to replicate the model across 200 ha and pool resources for smallholder farmers who cannot afford irrigation on their own.
                </figcaption>
              </figure>

              <div style={{ fontFamily: fonts.mono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark, marginBottom: '12px' }}>
                François Meysembourg, Founder
              </div>
              <div style={{ fontSize: '15px', color: colors.mutedDark, lineHeight: 1.6 }}>
                Bi-national engineer, France · Germany (ISFATES - DFHI)<br />
                Based in Eastern France · Active in West Africa
              </div>
            </div>

            <div style={{ fontSize: '17px', lineHeight: 1.7, color: colors.light, maxWidth: '60ch' }}>
              <p style={{ marginBottom: '24px' }}>
                I spent most of my career in industrial SMEs and mid-caps — automotive, timber, consumer goods — across Western Europe and the United States. Companies that manufacture, export, and fight for their margins and their processes.
              </p>
              <p style={{ marginBottom: '24px' }}>
                I led a business location team for international project development at EY, then spent six years in West Africa with GIZ in Ghana, seconded to the Ghana Investment Promotion Centre. My work: restructuring teams and helping investment projects close financing by combining bilateral grants, commercial loans, and equity. I learned one thing there: what decides a project is never the technology. It&apos;s the strategy, the rigour of execution, and the ability to measure what actually changes.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Taquae was born from that observation: AI is going to disrupt SMEs the way computing did forty years ago. But without strategy, without framing, without measuring impact, it&apos;s money going up in smoke. My ambition is to bring that discipline to leaders who sense AI could transform their business but don&apos;t know where to start.
              </p>
              <p style={{ color: colors.mutedDark, fontSize: '15px', fontStyle: 'italic' }}>
                Taquae&apos;s official launch is planned for early 2027.
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
            A first <em style={{ fontStyle: 'italic', fontWeight: 300 }}>30-minute</em> conversation, no strings attached.
          </h2>

          <p style={{ fontSize: '18px', color: colors.mutedDark, maxWidth: '56ch', marginBottom: '64px' }}>
            A direct conversation to understand your context, identify where AI can create value in your organisation, and see if we&apos;re a fit to work together.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px' }}>
            {/* Netlify form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/en/thanks"
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontFamily: fonts.mono, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark }}>
                  Name
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
                  Company / Organisation
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
                  Your context / question
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
                Send →
              </button>
            </form>

            {/* Contact details */}
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
                  Presence
                </div>
                <div style={{ fontSize: '18px', lineHeight: 1.6 }}>
                  Paris · Accra · Lagos
                </div>
                <div style={{ fontSize: '14px', color: colors.mutedDark, marginTop: '4px' }}>
                  West Africa presence via the Africon partnership
                </div>
              </div>

              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.mutedDark, marginBottom: '8px' }}>
                  Response time
                </div>
                <div style={{ fontSize: '15px', color: colors.mutedDark, lineHeight: 1.6, maxWidth: '40ch' }}>
                  I personally reply to every message, within 48 business hours at most.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer locale="en" />
    </div>
  );
}
