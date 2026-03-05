import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { SERVICES_LIST } from "../../data/services.js";

export function Services() {
  const reduced = useReducedMotion();

  return (
    <section id="services" className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="services-title">
      <SectionTitle id="services-title" className="text-balance">Услуги и цены</SectionTitle>
      <p className="text-body text-text-muted text-center max-w-2xl mx-auto mb-10 md:mb-12 leading-[1.65]">
        Точная стоимость — после осмотра и плана лечения. Консультация всегда бесплатно.
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SERVICES_LIST.map((item, i) => (
          <Motion.article
            key={item.title}
            data-animate
            className="bg-surface rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:border-l-4 hover:border-l-primary bg-primary-muted border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-primary/30"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-24px" },
              transition: { duration: 0.3, delay: i * 0.04 },
            })}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-3xl block" aria-hidden="true">{item.icon}</span>
                {item.popular && (
                  <span className="shrink-0 text-caption font-medium text-primary bg-primary-muted px-2.5 py-1 rounded-full">
                    Популярное
                  </span>
                )}
              </div>
              <h3 className="text-h3 font-semibold text-text mb-2">{item.title}</h3>
              <p className="text-caption text-text-muted leading-[1.65]">{item.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border gap-3">
              <span className="font-semibold text-body text-primary">
                {item.price}
              </span>
              <a
                href="#privacy"
                className="text-caption font-medium text-primary hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded shrink-0 cursor-pointer"
              >
                Записаться →
              </a>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
