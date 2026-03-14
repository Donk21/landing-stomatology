import { useEffect, useRef } from "react";
import { CLINIC } from "../../config/clinic.js";
import { useMobileMenuOpen } from "../../hooks/useMobileMenuOpen.jsx";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenuOpen();
  const mobileNavRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (mobileMenuOpen) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = scrollPositionRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
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

  return (
    <header className="sticky top-0 z-40 bg-surface backdrop-blur-sm border-b border-border transition-shadow duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-6 h-14"> 
        

        <a 
          className="font-display font-semibold text-text text-sm sm:text-base md:text-lg lg:text-h3 truncate max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-none mr-1" 
          href="#main" 
          aria-label="На главную"
        >
          Здоровая улыбка
        </a>


        <nav className="hidden lg:flex gap-4 xl:gap-6 text-caption text-text-muted">
          <a href="#doctors" className="hover:text-text transition-colors duration-200 whitespace-nowrap">Врачи</a>
          <a href="#services" className="hover:text-text transition-colors duration-200 whitespace-nowrap">Услуги</a>
          <a href="#before-after" className="hover:text-text transition-colors duration-200 whitespace-nowrap">До/после</a>
          <a href="#reviews" className="hover:text-text transition-colors duration-200 whitespace-nowrap">Отзывы</a>
          <a href="#contacts" className="hover:text-text transition-colors duration-200 whitespace-nowrap">Контакты</a>
        </nav>


        <div className="flex items-center gap-1 sm:gap-2 lg:gap-2">
          <a
            href="#data"
            className="hidden lg:inline-flex bg-primary text-white px-2 xl:px-4 h-9 xl:h-10 min-h-[36px] items-center justify-center rounded-button font-body font-semibold text-[11px] xl:text-caption hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:shadow-card active:scale-[0.98] whitespace-nowrap"
          >
            Записаться
          </a>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="hidden lg:inline-flex border border-border text-text px-2 xl:px-4 h-9 xl:h-10 min-h-[36px] items-center justify-center rounded-button text-[11px] xl:text-caption font-medium hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            Позвонить
          </a>
          
          <button
            type="button"
            className="lg:hidden min-w-[36px] min-h-[36px] p-1.5 rounded-lg hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <svg className="w-4 h-4 sm:w-4 sm:h-4 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            ? "opacity-100 translate-y-0 visible max-h-[400px]" 
            : "opacity-0 -translate-y-2 invisible pointer-events-none max-h-0"
          }
        `}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <nav className="px-2 py-2 flex flex-col gap-0.5"> 
          <a 
            href="#doctors" 
            className="min-h-[36px] py-1.5 px-2 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Врачи
          </a>
          <a 
            href="#services" 
            className="min-h-[36px] py-1.5 px-2 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Услуги и цены
          </a>
          <a 
            href="#before-after" 
            className="min-h-[36px] py-1.5 px-2 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            До и после
          </a>
          <a 
            href="#reviews" 
            className="min-h-[36px] py-1.5 px-2 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Отзывы
          </a>
          <a 
            href="#contacts" 
            className="min-h-[36px] py-1.5 px-2 flex items-center text-text font-body text-sm rounded-lg hover:bg-surface-alt transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Контакты
          </a>
          
          <div className="h-px bg-border my-1" aria-hidden="true"></div>
          
          <a
            href="#data"
            className="min-h-[36px] py-1.5 px-2 flex items-center justify-center bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-hover transition-colors duration-200 active:scale-[0.98]"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              setTimeout(() => {
                document.getElementById("data")?.scrollIntoView({ behavior: "auto", block: "start" });
              }, 300);
            }}
          >
            Записаться
          </a>
          <a 
            href={`tel:${CLINIC.phoneRaw}`} 
            className="min-h-[36px] py-1.5 px-2 flex items-center justify-center border border-border rounded-lg text-text font-medium text-sm hover:bg-surface-alt transition-colors duration-200 active:scale-[0.98]" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Позвонить
          </a>
        </nav>
      </div>
    </header>
  );
}