import { motion as Motion } from "framer-motion";
import { CLINIC } from "../../config/clinic.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { AppointmentForm } from "../../features/appointment/AppointmentForm.jsx";

export function Contacts() {
  const reduced = useReducedMotion();
  return (
    <section id="contacts" className="section-cta px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="contacts-title">
      <SectionTitle id="contacts-title" className="text-balance">Контактная информация</SectionTitle>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <Motion.div
          className="contents"
          {...(reduced ? {} : {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-24px" },
            transition: { duration: 0.35 },
          })}
        >
          <div className="space-y-4 text-text font-body text-body leading-[1.65]">
            <p><strong>Адрес:</strong> {CLINIC.address}</p>
            <p><strong>Метро:</strong> {CLINIC.metro}</p>
            <p><strong>Часы работы:</strong> {CLINIC.hours}</p>
            <a href={`tel:${CLINIC.phoneRaw}`} className="text-primary font-medium hover:underline block transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded">
              {CLINIC.phone}
            </a>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border" style={{ borderRadius: "16px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.6780%2C55.7722&z=16&pt=37.6780%2C55.7722,pm2rdl"
                width="100%"
                height="288"
                frameBorder="0"
                style={{ borderRadius: "16px", display: "block" }}
                title="Адрес клиники на карте"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span id="data" className="block h-0 w-full" tabIndex={-1} />
            <div className="bg-surface rounded-2xl border border-border shadow-card-hover overflow-hidden">
              <AppointmentForm />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
