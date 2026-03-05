import { CLINIC } from "../../config/clinic.js";
import { useMobileMenuOpen } from "../../hooks/useMobileMenuOpen.jsx";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useMobileMenuOpen();

  return (
    <header className="sticky top-0 z-40 bg-surface backdrop-blur-sm border-b border-border transition-shadow duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a className="font-display font-semibold text-h3 text-text" href="#main" aria-label="На главную">
          {CLINIC.name}
        </a>

        <nav className="hidden md:flex gap-8 text-caption text-text-muted">
          <a href="#doctors" className="hover:text-text transition-colors duration-200">Врачи</a>
          <a href="#services" className="hover:text-text transition-colors duration-200">Услуги и цены</a>
          <a href="#before-after" className="hover:text-text transition-colors duration-200">До и после</a>
          <a href="#reviews" className="hover:text-text transition-colors duration-200">Отзывы</a>
          <a href="#contacts" className="hover:text-text transition-colors duration-200">Контакты</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#data"
            className="hidden md:inline-flex bg-primary text-white px-6 h-12 min-h-[44px] items-center justify-center rounded-button font-body font-semibold text-caption hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:shadow-card active:scale-[0.98]"
          >
            Записаться
          </a>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="hidden md:inline-flex border border-border text-text px-5 h-12 min-h-[44px] items-center justify-center rounded-button text-caption font-medium hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 active:scale-[0.98]"
          >
            Позвонить
          </a>
          <button
            type="button"
            className="md:hidden min-w-[44px] min-h-[44px] p-3 rounded-lg hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden border-t border-border bg-surface overflow-hidden transition-[max-height] duration-300 ease-out ${mobileMenuOpen ? "max-h-[400px]" : "max-h-0"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          <a href="#doctors" className="min-h-[44px] py-3 flex items-center text-text font-body text-body cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Врачи</a>
          <a href="#services" className="min-h-[44px] py-3 flex items-center text-text font-body text-body cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Услуги и цены</a>
          <a href="#before-after" className="min-h-[44px] py-3 flex items-center text-text font-body text-body cursor-pointer" onClick={() => setMobileMenuOpen(false)}>До и после</a>
          <a href="#reviews" className="min-h-[44px] py-3 flex items-center text-text font-body text-body cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Отзывы</a>
          <a href="#contacts" className="min-h-[44px] py-3 flex items-center text-text font-body text-body cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
          <a href="#privacy" className="mt-2 min-h-[44px] flex items-center justify-center bg-primary text-white py-3 rounded-button font-semibold text-body hover:bg-primary-hover transition-colors duration-200 active:scale-[0.98] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Записаться</a>
          <a href={`tel:${CLINIC.phoneRaw}`} className="min-h-[44px] py-3 flex items-center justify-center border border-border rounded-button text-text font-medium text-body hover:bg-surface-alt transition-colors duration-200 active:scale-[0.98] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Позвонить</a>
        </nav>
      </div>
    </header>
  );
}
