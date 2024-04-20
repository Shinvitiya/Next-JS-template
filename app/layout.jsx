import { Inter } from "next/font/google";
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL),
  title: { 
    default: "WebsiteName",
    template: "%s | WebsiteName "
  },
  description: "",
  openGraph: {
    title: "WebsiteName",
    images: "/opengraph.png",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
