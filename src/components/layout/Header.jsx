import { useEffect, useRef } from "react";
import { CLINIC } from "../../config/clinic.js";
import { useMobileMenuOpen } from "../../hooks/useMobileMenuOpen.jsx";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenuOpen();
  const mobileNavRef = useRef(null);

    useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; 
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const el = mobileNavRef.current;
    if (!el) return;
    if (mobileMenuOpen) {
      el.removeAttribute("inert");
    } else {
      el.setAttribute("inert", "");
    }
  }, [mobileMenuOpen]);

  const clinicNameParts = {
    first: "Стоматология",
    second: "«Здоровая улыбка»"
  };

  return (
    <header className="sticky top-0 z-40 bg-surface backdrop-blur-sm border-b border-border transition-shadow duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a 
          className="
            font-display 
            font-semibold 
            text-text
            flex
            flex-col
            leading-tight
            lg:block
            lg:leading-normal
          " 
          href="#main" 
          aria-label="На главную"
        >
          <span className="block lg:hidden text-xs xs:text-sm sm:text-base">
            {clinicNameParts.first}
          </span>
          <span className="block lg:hidden text-xs xs:text-sm sm:text-base">
            {clinicNameParts.second}
          </span>
          <span className="hidden lg:block text-h3">
            {CLINIC.name}
          </span>
        </a>

        <nav className="hidden lg:flex gap-8 text-caption text-text-muted">
          <a href="#doctors" className="hover:text-text transition-colors duration-200">Врачи</a>
          <a href="#services" className="hover:text-text transition-colors duration-200">Услуги и цены</a>
          <a href="#before-after" className="hover:text-text transition-colors duration-200">До и после</a>
          <a href="#reviews" className="hover:text-text transition-colors duration-200">Отзывы</a>
          <a href="#contacts" className="hover:text-text transition-colors duration-200">Контакты</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#data"
            className="hidden lg:inline-flex bg-primary text-white px-6 h-12 min-h-[44px] items-center justify-center rounded-button font-body font-semibold text-caption hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:shadow-card active:scale-[0.98]"
          >
            Записаться
          </a>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="hidden lg:inline-flex border border-border text-text px-5 h-12 min-h-[44px] items-center justify-center rounded-button text-caption font-medium hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 active:scale-[0.98]"
          >
            Позвонить
          </a>

          <button
            type="button"
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 sm:p-3 rounded-lg hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={mobileNavRef}
        id="mobile-nav"
        className={`
          lg:hidden 
          absolute
          top-full
          left-0
          right-0
          mt-1
          mx-2
          bg-surface 
          overflow-hidden 
          transition-all duration-300 ease-out 
          rounded-xl
          shadow-lg
          ${mobileMenuOpen 
            ? "opacity-100 translate-y-0 visible max-h-[450px]" 
            : "opacity-0 -translate-y-2 invisible pointer-events-none max-h-0"
          }
        `}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <nav className="px-3 py-3 flex flex-col gap-1">
          <a 
            href="#doctors" 
            className="min-h-[40px] py-2 px-3 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Врачи
          </a>
          <a 
            href="#services" 
            className="min-h-[40px] py-2 px-3 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Услуги и цены
          </a>
          <a 
            href="#before-after" 
            className="min-h-[40px] py-2 px-3 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            До и после
          </a>
          <a 
            href="#reviews" 
            className="min-h-[40px] py-2 px-3 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Отзывы
          </a>
          <a 
            href="#contacts" 
            className="min-h-[40px] py-2 px-3 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Контакты
          </a>

          <div className="h-px bg-border my-1" aria-hidden="true"></div>
          
          <a
            href="#data"
            className="min-h-[40px] py-2 px-3 flex items-center justify-center bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-hover transition-colors duration-200 active:scale-[0.98]"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              setTimeout(() => {
                document.getElementById("data")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 300);
            }}
          >
            Записаться
          </a>
          <a 
            href={`tel:${CLINIC.phoneRaw}`} 
            className="min-h-[40px] py-2 px-3 flex items-center justify-center border border-border rounded-lg text-text font-medium text-sm hover:bg-surface-alt transition-colors duration-200 active:scale-[0.98]" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Позвонить
          </a>
        </nav>
      </div>
    </header>
  );
}