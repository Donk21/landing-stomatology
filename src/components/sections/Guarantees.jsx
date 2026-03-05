import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { GUARANTEES_LIST } from "../../data/guarantees.jsx";

export function Guarantees() {
  const reduced = useReducedMotion();
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="guarantees-title">
      <SectionTitle id="guarantees-title" className="text-balance">Гарантии</SectionTitle>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {GUARANTEES_LIST.map((item, i) => (
          <Motion.article
            key={item.title}
            className="bg-surface p-6 rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-out font-body cursor-pointer"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-24px" },
              transition: { duration: 0.3, delay: i * 0.06 },
            })}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-h3 font-semibold text-text mb-2">{item.title}</h3>
            <p className="text-caption text-text-muted leading-[1.65]">{item.text}</p>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
