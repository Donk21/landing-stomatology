import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { GUARANTEES_LIST } from "../../data/guarantees.jsx";

export function Guarantees() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="guarantees-title">
        <SectionTitle id="guarantees-title" className="text-balance">Гарантии</SectionTitle>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {GUARANTEES_LIST.map((item) => (
            <article
              key={item.title}
              className="bg-surface p-6 rounded-2xl border border-border shadow-card font-body"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-h3 font-semibold text-text mb-2">{item.title}</h3>
              <p className="text-caption text-text-muted leading-[1.65]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="guarantees-title">
      <SectionTitle id="guarantees-title" className="text-balance">Гарантии</SectionTitle>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {GUARANTEES_LIST.map((item, i) => (
          <Motion.article
            key={item.title}
            className="
              bg-surface 
              p-6 
              rounded-2xl 
              border 
              border-border 
              shadow-card 
              font-body
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
              delay: i * 0.06 
            }}
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-h3 font-semibold text-text mb-2">{item.title}</h3>
              <p className="text-caption text-text-muted leading-[1.65]">{item.text}</p>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}