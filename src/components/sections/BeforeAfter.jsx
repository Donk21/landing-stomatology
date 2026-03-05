import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { BEFORE_AFTER_SLIDES } from "../../data/beforeAfter.jsx";

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const slides = BEFORE_AFTER_SLIDES;

  if (!slides.length) return null;

  return (
    <section id="before-after" className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="before-after-title">
      <SectionTitle id="before-after-title" className="text-balance">До и после</SectionTitle>
      <Motion.div
        className="max-w-3xl mx-auto"
        {...(reduced ? {} : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-24px" },
          transition: { duration: 0.35 },
        })}
      >
        <div className="bg-surface rounded-2xl border border-border shadow-card overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <Motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-0 aspect-[4/3]"
            >
              <div className="p-4 flex flex-col items-center justify-center border-r border-border bg-surface-alt">
                <span className="text-caption font-semibold text-text-muted mb-2">До</span>
                <div className="w-full flex-1 min-h-0">{slides[index].before}</div>
              </div>
              <div className="p-4 flex flex-col items-center justify-center bg-surface">
                <span className="text-caption font-semibold text-text-muted mb-2">После</span>
                <div className="w-full flex-1 min-h-0">{slides[index].after}</div>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>
        <p className="text-body text-text-muted text-center mb-3 font-body leading-[1.65]" aria-live="polite">
          {slides[index].desc}
        </p>
        <p className="text-caption text-text-muted text-center mb-4 font-body">
          {index + 1} из {slides.length}
        </p>
        <div className="flex justify-center gap-2 mb-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full h-2 min-w-[8px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer ${i === index ? "w-8 bg-primary" : "w-2 bg-border"}`}
              aria-label={`Слайд ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="px-4 min-h-[44px] h-11 border border-border rounded-button hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-text font-body text-body transition-colors duration-200 active:scale-[0.98] cursor-pointer"
            aria-label="Предыдущий слайд"
          >
            Назад
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="px-4 min-h-[44px] h-11 border border-border rounded-button hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-text font-body text-body transition-colors duration-200 active:scale-[0.98] cursor-pointer"
            aria-label="Следующий слайд"
          >
            Далее
          </button>
        </div>
      </Motion.div>
    </section>
  );
}
