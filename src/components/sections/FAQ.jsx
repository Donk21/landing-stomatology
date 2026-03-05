import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { FAQ_LIST } from "../../data/faq.js";

export function FAQ() {
  const reduced = useReducedMotion();
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="faq-title">
      <SectionTitle id="faq-title" className="text-balance">Частые вопросы</SectionTitle>
      <Motion.div
        className="max-w-3xl mx-auto space-y-3 font-body"
        {...(reduced ? {} : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-24px" },
          transition: { duration: 0.35 },
        })}
      >
        {FAQ_LIST.map(([q, a]) => (
          <details key={q} className="border border-border rounded-xl overflow-hidden bg-surface shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer">
            <summary className="p-4 font-semibold text-body text-text cursor-pointer hover:bg-surface-alt transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset list-none">
              {q}
            </summary>
            <div className="px-4 pb-4 pt-0 text-caption text-text-muted leading-[1.65]">{a}</div>
          </details>
        ))}
      </Motion.div>
    </section>
  );
}
