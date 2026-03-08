import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { DOCTORS_LIST } from "../../data/doctors.js";

export function Doctors() {
  const reduced = useReducedMotion();
  
  if (reduced) {
    return (
      <section id="doctors" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="doctors-title">
        <SectionTitle id="doctors-title" className="text-balance">Врачи</SectionTitle>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {DOCTORS_LIST.map((d) => (
            <article
              key={d.name}
              className="bg-surface p-6 rounded-2xl border border-border shadow-card font-body"
            >
              <div className="rounded-xl overflow-hidden mb-4 min-h-[280px] relative bg-surface-alt">
                <d.Avatar />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-h3 text-text">{d.name}</h3>
              <p className="text-caption text-primary font-medium mt-2">{d.role}</p>
              <p className="text-caption text-text-muted mt-1">{d.experience}</p>
              <p className="text-caption text-text-muted mt-3 leading-[1.65]">{d.detail}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="doctors" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="doctors-title">
      <SectionTitle id="doctors-title" className="text-balance">Врачи</SectionTitle>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {DOCTORS_LIST.map((d, i) => (
          <Motion.article
            key={d.name}
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
              <div className="rounded-xl overflow-hidden mb-4 min-h-[280px] relative bg-surface-alt">
                <d.Avatar />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-h3 text-text">{d.name}</h3>
              <p className="text-caption text-primary font-medium mt-2">{d.role}</p>
              <p className="text-caption text-text-muted mt-1">{d.experience}</p>
              <p className="text-caption text-text-muted mt-3 leading-[1.65]">{d.detail}</p>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}