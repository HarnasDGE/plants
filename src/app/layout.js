import Script from "next/script";
import { Banners } from "./components/Banners";
import { Footer } from "./components/Footer";
import { MainBar } from "./components/MainBar";
import { TopBar } from "./components/TopBar";
import { TITLE_WEBSITE } from "./constans/mainInfo";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata = {
  title: `${TITLE_WEBSITE}`,
  description: "Buy, plant and grow with PLANTS!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="min-h-full">
        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
        <TopBar />
        <MainBar />
        {children}
        <div className="flex flex-col gap-[100px] mt-[100px]">
          <Banners />
          <Footer />
        </div>
      </body>
    </html>
  );
}
