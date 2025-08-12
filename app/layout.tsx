import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Bruno Ibiapina - Desenvolvedor Full Stack | Portfólio",
  description:
    "Portfólio profissional de Bruno Ibiapina, estudante de Engenharia de Software especializado em React, Next.js, Node.js e desenvolvimento web moderno. Disponível para estágio e oportunidades júnior.",
  keywords: [
    "Bruno Ibiapina",
    "desenvolvedor",
    "full stack",
    "react",
    "nextjs",
    "nodejs",
    "javascript",
    "typescript",
    "portfolio",
    "estágio",
    "júnior",
    "engenharia de software",
    "ICEV",
    "Brasília",
  ],
  authors: [{ name: "Bruno Ibiapina", url: "https://brunobiapina.dev" }],
  creator: "Bruno Ibiapina",
  publisher: "Bruno Ibiapina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brunobiapina.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brunobiapina.dev",
    title: "Bruno Ibiapina - Desenvolvedor Full Stack",
    description:
      "Estudante de Engenharia de Software apaixonado por criar soluções inovadoras. Especializado em React, Next.js e desenvolvimento web moderno.",
    siteName: "Bruno Ibiapina Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bruno Ibiapina - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Ibiapina - Desenvolvedor Full Stack",
    description: "Estudante de Engenharia de Software apaixonado por criar soluções inovadoras.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
