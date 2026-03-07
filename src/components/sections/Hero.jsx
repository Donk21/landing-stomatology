import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { HeroClinicSvg } from "../assets/HeroClinicSvg.jsx";

export function Hero() {
  const reduced = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="main" className="section-hero px-4 sm:px-6 lg:px-8 bg-bg" aria-label="Главная">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-left">
          <Motion.h1
            className="font-display text-h1 md:text-4xl lg:text-5xl font-semibold text-text mb-6 text-balance"
            {...(reduced ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } })}
          >
            Здоровая улыбка без боли и переплат
          </Motion.h1>

          <Motion.span
            className="inline-block text-body-lg font-body font-semibold text-primary mb-4 px-4 py-2 rounded-full bg-primary-muted"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.1 } })}
          >
            Первичная консультация 0 ₽
          </Motion.span>

          <Motion.p
            className="text-body-lg text-text-muted mb-6 font-body max-w-xl leading-[1.65]"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.18 } })}
          >
            Осмотр и план лечения — без боли и страха. Опытные врачи, современная анестезия.
          </Motion.p>

          <Motion.p
            className="text-body text-text-muted mb-8 font-body leading-[1.65]"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.25 } })}
          >
            Перезвоним в течение 15 минут.
          </Motion.p>

          <Motion.div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.32 } })}
          >
            <a
              href="#data"
              className="w-full sm:w-auto min-w-[220px] h-12 md:h-14 min-h-[44px] px-6 md:px-8 bg-primary text-white font-body font-semibold text-body rounded-button flex items-center justify-center hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:shadow-card-hover active:scale-[0.98] cursor-pointer"
            >
              Записаться на консультацию
            </a>
            <a
              href="#services"
              className="text-primary font-medium text-body hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded font-body"
            >
              Узнать цены
            </a>
          </Motion.div>
        </div>

        <Motion.div
          className="rounded-2xl overflow-hidden aspect-[16/10] bg-surface shadow-card flex items-center justify-center"
          {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.15 } })}
        >
          {imgError ? (
            <HeroClinicSvg />
          ) : (
            <img
              src="/clinic.jpg"
              alt="Клиника стоматологии: комфортный приёмный зал, светлый коридор"
              className="w-full h-full object-cover rounded-2xl"
              width={800}
              height={500}
              loading="eager"
              fetchPriority="high"
              onError={() => setImgError(true)}
            />
          )}
        </Motion.div>
      </div>
    </section>
  );
}
