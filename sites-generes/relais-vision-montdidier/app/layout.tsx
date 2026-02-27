import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Orthoptiste Montdidier | Jennifer Loisel - Bilan & Rééducation",
  description: "Cabinet d'orthoptie à Montdidier. Jennifer Loisel, orthoptiste diplômée d'État, vous accompagne pour vos bilans visuels, rééducation neurovisuelle et renouvellement de lunettes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}