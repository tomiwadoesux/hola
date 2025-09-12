import { IBM_Plex_Serif, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import PreLoader from "@/components/PreLoader";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // only 400 available
  variable: "--font-bebas-neue",
  display: "swap",
});


// Metadata
export const metadata = {
  title: "Olaoluwa Akinwale Portfolio",
  description: "Creative portfolio of Olaoluwa Akinwale – model and artist.",
  keywords: [
    "model",
    "Model Portfolio",
    "olaoluwa ak",
    "Olaoluwa Akinwale",
    "creative work",
  ],
  authors: [{ name: "Olaoluwa Akinwale" }],
  openGraph: {
    title: "Olaoluwa Ak Portfolio",
    description: "Model Portfolio of Olaoluwa Akinwale",
    url: "https://yourdomain.com",
    siteName: "Olaoluwa Ak Portfolio",
    images: [
      {
        url: "https://yourdomain.com/preview.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${montserrat.variable} ${bebasNeue.variable}`}
      >
        <PreLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
