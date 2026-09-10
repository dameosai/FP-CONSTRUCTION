import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    template: "%s | FP CONSTRUCTION",
    default: "FP CONSTRUCTION | Civil Works, Infrastructure & Construction Materials",
  },
  description:
    "FP CONSTRUCTION is a French SASU based in Le Havre, Normandy, specialized in road works, utility & VRD networks, building trades, and wholesale supply of construction materials and hardware.",
  keywords: [
    "FP CONSTRUCTION",
    "construction materials",
    "hardware trading",
    "road works",
    "travaux routiers",
    "VRD Le Havre",
    "Normandy construction",
    "import export construction materials",
    "SASU Le Havre",
    "quincaillerie industrielle",
  ],
  authors: [{ name: "FP CONSTRUCTION" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fbfbf5] text-black">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
