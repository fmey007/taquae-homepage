import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taquae.eu"),
  title: {
    default: "Taquae Consulting · Stratégie IA pour PME et organismes de développement",
    template: "%s · Taquae Consulting",
  },
  description:
    "Conseil de fond pour PME industrielles et organismes de développement qui veulent intégrer l'IA — vite, juste, et sans dépendance technologique. Audit, accompagnement stratégique, mise en œuvre technique.",
  keywords: [
    "conseil IA",
    "stratégie IA",
    "intelligence artificielle PME",
    "audit IA",
    "Taquae",
    "coopération internationale IA",
  ],
  authors: [{ name: "François Meysembourg", url: "https://taquae.eu" }],
  creator: "Taquae Consulting",
  publisher: "Taquae SASU",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://taquae.eu",
    siteName: "Taquae Consulting",
    title: "Taquae Consulting · Stratégie IA pour PME et organismes de développement",
    description:
      "Conseil de fond pour PME industrielles et organismes de développement qui veulent intégrer l'IA — vite, juste, et sans dépendance technologique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taquae Consulting · Stratégie IA pour PME et organismes de développement",
    description:
      "Conseil de fond pour PME industrielles et organismes de développement qui veulent intégrer l'IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
