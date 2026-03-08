import { Helmet } from "react-helmet-async";
import { CLINIC } from "./config/clinic.js";
import { Header } from "./components/layout/Header.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { StickyCTA } from "./components/layout/StickyCTA.jsx";
import { MobileMenuProvider } from "./hooks/useMobileMenuOpen.jsx";
import { PrivacyModalProvider } from "./hooks/usePrivacyModal.jsx";
import { PrivacyModal } from "./components/ui/PrivacyModal.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { StatsBar } from "./components/sections/StatsBar.jsx";
import { Services } from "./components/sections/Services.jsx";
import { Doctors } from "./components/sections/Doctors.jsx";
import { BeforeAfter } from "./components/sections/BeforeAfter.jsx";
import { Reviews } from "./components/sections/Reviews.jsx";
import { Guarantees } from "./components/sections/Guarantees.jsx";
import { FAQ } from "./components/sections/FAQ.jsx";
import { Contacts } from "./components/sections/Contacts.jsx";

/* ================= ROOT ================= */
export default function DentalLanding() {
  return (
    <MobileMenuProvider>
      <PrivacyModalProvider>
        <div className="bg-bg text-text scroll-smooth min-h-screen pb-20 md:pb-0">
          <a
            href="#main"
            className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-xl focus:w-auto focus:h-auto focus:overflow-visible focus:m-0 focus:[clip:auto] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            К основному содержимому
          </a>
          <Helmet>
            <title>{CLINIC.name} — запись на консультацию</title>
            <meta
              name="description"
              content="Современная стоматология в Москве. Без боли. Запишитесь на первичную консультацию онлайн или получите обратный звонок."
            />
            <meta property="og:title" content={CLINIC.name} />
            <meta
              property="og:description"
              content="Запишитесь на консультацию к опытным врачам. Первичный приём бесплатно."
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Dentist",
                  name: CLINIC.name,
                  telephone: CLINIC.phoneRaw.replace(/\s|\(|\)|-/g, ""),
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "ул. Бауманская, 32",
                    addressLocality: "Москва",
                    addressCountry: "RU",
                  },
                }),
              }}
            />
          </Helmet>
          <Header />
          <Hero />
          <StatsBar />
          <Services />
          <Doctors />
          <BeforeAfter />
          <Reviews />
          <Guarantees />
          <FAQ />
          <Contacts />
          <Footer />
          <StickyCTA />
          <PrivacyModal />
        </div>
      </PrivacyModalProvider>
    </MobileMenuProvider>
  );
}