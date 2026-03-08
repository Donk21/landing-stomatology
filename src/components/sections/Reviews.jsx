import { motion as Motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { StarRating } from "../ui/StarRating.jsx";
import { REVIEWS_LIST } from "../../data/reviews.js";

export function Reviews() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section id="reviews" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="reviews-title">
        <SectionTitle id="reviews-title" className="text-balance">Отзывы</SectionTitle>
        <div className="text-center mb-10">
          <span className="text-4xl font-bold text-text">4.9</span>
          <span className="text-text-muted ml-2">из 5 · на основе 847 отзывов</span>
          <div className="flex justify-center mt-2">
            <StarRating count={5} className="text-primary" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_LIST.map((r) => (
            <blockquote
              key={`${r.name}-${r.date}`}
              className="bg-surface p-6 rounded-2xl border border-border border-l-4 border-l-primary shadow-card text-text font-body text-body leading-[1.65]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-text">{r.name}</span>
                <StarRating count={r.stars} className="text-primary" />
              </div>
              <p className="text-caption text-text-muted mb-2">{r.date} · {r.source}</p>
              <p className="text-body leading-[1.65]">«{r.text}»</p>
            </blockquote>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="reviews-title">
      <SectionTitle id="reviews-title" className="text-balance">Отзывы</SectionTitle>
      <div className="text-center mb-10">
        <span className="text-4xl font-bold text-text">4.9</span>
        <span className="text-text-muted ml-2">из 5 · на основе 847 отзывов</span>
        <div className="flex justify-center mt-2">
          <StarRating count={5} className="text-primary" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS_LIST.map((r, i) => (
          <Motion.blockquote
            key={`${r.name}-${i}`}
            className="
              bg-surface 
              p-6 
              rounded-2xl 
              border 
              border-border 
              border-l-4 
              border-l-primary 
              shadow-card 
              text-text 
              font-body 
              text-body 
              leading-[1.65]
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
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-text">{r.name}</span>
                <StarRating count={r.stars} className="text-primary" />
              </div>
              <p className="text-caption text-text-muted mb-2">{r.date} · {r.source}</p>
              <p className="text-body leading-[1.65]">«{r.text}»</p>
            </div>
          </Motion.blockquote>
        ))}
      </div>
    </section>
  );
}