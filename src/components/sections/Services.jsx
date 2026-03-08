import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { SERVICES_LIST } from "../../data/services.js";

export function Services() {
  const reduced = useReducedMotion();

  // Если пользователь предпочитает меньше движения
  if (reduced) {
    return (
      <section id="services" className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="services-title">
        <SectionTitle id="services-title" className="text-balance">Услуги и цены</SectionTitle>
        <p className="text-body text-text-muted text-center max-w-2xl mx-auto mb-10 md:mb-12 leading-[1.65] text-balance">
          Точная стоимость — после осмотра и плана лечения. Консультация всегда бесплатная.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES_LIST.map((item) => (
            <article
              key={item.title}
              className="bg-surface rounded-2xl p-6 border border-border flex flex-col justify-between shadow-card"
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
                  href="#data"
                  className="text-caption font-medium text-primary hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded shrink-0 cursor-pointer"
                >
                  Записаться →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="services-title">
      <SectionTitle id="services-title" className="text-balance">Услуги и цены</SectionTitle>
      <p className="text-body text-text-muted text-center max-w-2xl mx-auto mb-10 md:mb-12 leading-[1.65]">
        Точная стоимость — после осмотра и плана лечения. Консультация всегда бесплатная.
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SERVICES_LIST.map((item, i) => (
          <Motion.article
            key={item.title}
            className="
              bg-surface 
              rounded-2xl 
              p-6 
              border 
              border-border 
              flex 
              flex-col 
              justify-between 
              shadow-card
              group
              relative
              overflow-hidden
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.05 
            }}
          >
            {/* Hover эффекты - отдельно от анимации появления */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1">
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
            
            <div className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border gap-3">
                <span className="font-semibold text-body text-primary">
                  {item.price}
                </span>
                <a
                  href="#data"
                  className="text-caption font-medium text-primary hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded shrink-0 cursor-pointer"
                >
                  Записаться →
                </a>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}