import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { SectionTitle } from "../ui/SectionTitle.jsx";
import { DOCTORS_LIST } from "../../data/doctors.js";

export function Doctors() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const reduced = useReducedMotion();
  const doctors = DOCTORS_LIST;

  if (!doctors.length) return null;

  const nextSlide = () => {
    setIndex((i) => (i + 1) % doctors.length);
  };

  const prevSlide = () => {
    setIndex((i) => (i - 1 + doctors.length) % doctors.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); 
      } else {
        prevSlide(); 
      }
    }
    
    setTouchStart(null);
  };

  const currentDoctor = doctors[index];
  const DoctorAvatar = currentDoctor?.Avatar;

  if (reduced) {
    return (
      <section id="doctors" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="doctors-title">
        <SectionTitle id="doctors-title" className="text-balance">Врачи</SectionTitle>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => {
              const DocAvatar = doctor.Avatar;
              return (
                <div
                  key={doctor.name}
                  className="bg-surface p-6 rounded-2xl border border-border shadow-card font-body"
                >
                  <div className="rounded-xl overflow-hidden mb-4 min-h-[280px] relative bg-surface-alt">
                    <DocAvatar />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-h3 text-text">{doctor.name}</h3>
                  <p className="text-caption text-primary font-medium mt-2">{doctor.role}</p>
                  <p className="text-caption text-text-muted mt-1">{doctor.experience}</p>
                  <p className="text-caption text-text-muted mt-3 leading-[1.65]">{doctor.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="doctors" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="doctors-title">
      <SectionTitle id="doctors-title" className="text-balance">Врачи</SectionTitle>
      
      <Motion.div
        className="max-w-3xl mx-auto"
        {...(reduced ? {} : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-24px" },
          transition: { duration: 0.35 },
        })}
      >
        <div 
          className="bg-surface rounded-2xl border border-border shadow-card overflow-hidden mb-4 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <Motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="p-6 bg-surface">
                <div className="rounded-xl overflow-hidden mb-4 min-h-[280px] relative bg-surface-alt">
                  {DoctorAvatar && <DoctorAvatar />}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-h3 text-text text-center">{currentDoctor?.name}</h3>
                <p className="text-caption text-primary font-medium mt-2 text-center">{currentDoctor?.role}</p>
                <p className="text-caption text-text-muted mt-1 text-center">{currentDoctor?.experience}</p>
                <p className="text-caption text-text-muted mt-3 leading-[1.65] text-center">{currentDoctor?.detail}</p>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>

        <p className="text-caption text-text-muted text-center mb-4 font-body">
          {index + 1} из {doctors.length}
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {doctors.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full h-2 min-w-[8px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer ${
                i === index ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={`Врач ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={prevSlide}
            className="px-4 min-h-[44px] h-11 border border-border rounded-button hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-text font-body text-body transition-colors duration-200 active:scale-[0.98] cursor-pointer"
            aria-label="Предыдущий врач"
          >
            Назад
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="px-4 min-h-[44px] h-11 border border-border rounded-button hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-text font-body text-body transition-colors duration-200 active:scale-[0.98] cursor-pointer"
            aria-label="Следующий врач"
          >
            Далее
          </button>
        </div>
      </Motion.div>
    </section>
  );
}