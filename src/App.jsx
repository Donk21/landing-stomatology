import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CLINIC = {
  name: "Стоматология «Здоровая улыбка»",
  phone: "+7 (495) 128-44-55",
  phoneRaw: "+74951284455",
  address: "г. Москва, ул. Бауманская, 32",
  metro: "м. Бауманская, 3 мин пешком",
  hours: "Пн–Пт 9:00–21:30 / Сб–Вс 9:00–21:00",
};

/* ================= ROOT ================= */
export default function DentalLanding() {
  return (
    <div className="bg-bg text-text scroll-smooth min-h-screen pb-20 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-xl focus:w-auto focus:h-auto focus:overflow-visible focus:m-0 focus:[clip:auto] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        К основному содержимому
      </a>
      <Helmet>
        <title>{CLINIC.name} — запись на консультацию</title>
        <meta
          name="description"
          content="Современная стоматология в Москве. Без боли. Запишитесь на первичную консультацию онлайн или получите обратный звонок."
        />
        <meta property="og:title" content={CLINIC.name} />
        <meta
          property="og:description"
          content="Запишитесь на консультацию к опытным врачам. Первичный приём бесплатно."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: CLINIC.name,
              telephone: CLINIC.phoneRaw.replace(/\s|\(|\)|-/g, ""),
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Бауманская, 32",
                addressLocality: "Москва",
                addressCountry: "RU",
              },
            }),
          }}
        />
      </Helmet>
      <Header />
      <Hero />
      <StatsBar />
      <Services />
      <Doctors />
      <BeforeAfter />
      <Reviews />
      <Guarantees />
      <FAQ />
      <Contacts />
      <Footer />
      <StickyCTA />
    </div>
  );
}

/* ================= HEADER ================= */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

/* ================= HERO ================= */
function Hero() {
  const reduced = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="main" className="section-hero px-4 sm:px-6 lg:px-8 bg-bg" aria-label="Главная">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-left">
          <motion.h1
            className="font-display text-h1 md:text-4xl lg:text-5xl font-semibold text-text mb-6 text-balance"
            {...(reduced ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } })}
          >
            Здоровая улыбка без боли и переплат
          </motion.h1>

          <motion.span
            className="inline-block text-body-lg font-body font-semibold text-primary mb-4 px-4 py-2 rounded-full bg-primary-muted"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.1 } })}
          >
            Первичная консультация 0 ₽
          </motion.span>

          <motion.p
            className="text-body-lg text-text-muted mb-6 font-body max-w-xl leading-[1.65]"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.18 } })}
          >
            Осмотр и план лечения — без давления и обязательств. Опытные врачи, современная анестезия.
          </motion.p>

          <motion.p
            className="text-body text-text-muted mb-8 font-body leading-[1.65]"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.25 } })}
          >
            Без обязательств. Перезвоним в течение 15 минут.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            {...(reduced ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.32 } })}
          >
            <a
              href="#privacy"
              className="w-full sm:w-auto min-w-[220px] h-12 md:h-14 min-h-[44px] px-6 md:px-8 bg-primary text-white font-body font-semibold text-body rounded-button flex items-center justify-center hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:shadow-card-hover active:scale-[0.98] cursor-pointer"
            >
              Записаться на консультацию
            </a>
            <a
              href="#services"
              className="text-primary font-medium text-body hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded font-body"
            >
              Узнать цены
            </a>
          </motion.div>
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden aspect-[16/10] bg-surface shadow-card flex items-center justify-center"
          {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.15 } })}
        >
          {imgError ? (
            <HeroClinicSvg />
          ) : (
            <img
              src="/clinic.jpg"
              alt="Клиника стоматологии: комфортный приёмный зал, светлый коридор"
              className="w-full h-full object-cover rounded-2xl"
              width={800}
              height={500}
              loading="eager"
              fetchPriority="high"
              onError={() => setImgError(true)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

function HeroClinicSvg() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="heroWindow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8f0eb" />
          <stop offset="100%" stopColor="#d4e6d9" />
        </linearGradient>
        <linearGradient id="heroPrimary" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d5a3d" />
          <stop offset="100%" stopColor="#234a32" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="#f9fafb" />
      <rect x="0" y="200" width="800" height="300" fill="#f0ede8" />
      <rect x="80" y="80" width="640" height="320" rx="16" fill="url(#heroWindow)" stroke="#e5e2dd" strokeWidth="2" />
      <rect x="100" y="100" width="600" height="180" fill="#ffffff" opacity="0.9" />
      <rect x="120" y="300" width="200" height="80" rx="8" fill="url(#heroPrimary)" />
      <rect x="340" y="300" width="120" height="80" rx="8" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <rect x="480" y="300" width="220" height="80" rx="8" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <circle cx="180" cy="340" r="20" fill="#2d5a3d" opacity="0.3" />
      <path d="M100 380 L150 340 L200 380 L250 340 L300 380" stroke="#2d5a3d" strokeWidth="2" fill="none" opacity="0.5" />
      <ellipse cx="600" cy="200" rx="60" ry="40" fill="#e8f0eb" />
      <circle cx="580" cy="195" r="8" fill="#4b5563" />
      <circle cx="620" cy="195" r="8" fill="#4b5563" />
      <path d="M575 215 Q600 225 625 215" stroke="#4b5563" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="560" y="230" width="80" height="40" rx="4" fill="#2d5a3d" />
      <rect x="120" y="120" width="80" height="60" rx="4" fill="#6b5344" opacity="0.3" />
      <rect x="220" y="130" width="100" height="40" rx="4" fill="#e5e2dd" />
      <rect x="550" y="130" width="120" height="50" rx="4" fill="#e5e2dd" />
    </svg>
  );
}

/* ================= STATS BAR ================= */
function StatsBar() {
  return (
    <section className="py-10 px-4 bg-surface border-y border-border" aria-label="Статистика клиники">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-primary">14 лет</p>
          <p className="text-caption text-text-muted mt-1">на рынке</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">3 врача</p>
          <p className="text-caption text-text-muted mt-1">специалиста</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">4.9 ★</p>
          <p className="text-caption text-text-muted mt-1">на Яндекс.Картах</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary">2 года</p>
          <p className="text-caption text-text-muted mt-1">гарантия на работы</p>
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICES (merged with prices) ================= */
const SERVICES_LIST = [
  { title: "Консультация", desc: "Осмотр, план лечения, ответы на вопросы. Без обязательств.", icon: "💬", price: "Бесплатно", popular: false },
  { title: "Лечение кариеса", desc: "Удаление поражённых тканей и восстановление пломбой.", icon: "🦷", price: "от 3 500 ₽", popular: false },
  { title: "Лечение пульпита", desc: "Безболезненное лечение корневых каналов под анестезией.", icon: "🔬", price: "от 6 500 ₽", popular: false },
  { title: "Лечение периодонтита", desc: "Комплексное лечение воспаления тканей вокруг корня зуба.", icon: "💊", price: "от 4 500 ₽", popular: false },
  { title: "Удаление зуба", desc: "Аккуратное удаление с минимальной травматичностью.", icon: "⚕️", price: "от 2 800 ₽", popular: false },
  { title: "Имплантация", desc: "Восстановление утраченных зубов современными имплантами.", icon: "🔩", price: "от 25 000 ₽", popular: true },
  { title: "Отбеливание", desc: "Профессиональное безопасное осветление эмали.", icon: "✨", price: "от 9 000 ₽", popular: false },
  { title: "Ортодонтия", desc: "Исправление прикуса и выравнивание зубов.", icon: "😁", price: "от 35 000 ₽", popular: false },
  { title: "Профгигиена", desc: "Удаление налёта и камня для здоровья зубов.", icon: "🪥", price: "от 3 200 ₽", popular: true },
  { title: "Протезирование", desc: "Восстановление зубов коронками и протезами.", icon: "👑", price: "от 12 000 ₽", popular: false },
];

function Services() {
  const reduced = useReducedMotion();

  return (
    <section id="services" className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="services-title">
      <SectionTitle id="services-title" className="text-balance">Услуги и цены</SectionTitle>
      <p className="text-body text-text-muted text-center max-w-2xl mx-auto mb-10 md:mb-12 leading-[1.65]">
        Точная стоимость — после осмотра и плана лечения. Консультация всегда бесплатно.
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SERVICES_LIST.map((item, i) => (
          <motion.article
            key={item.title}
            data-animate
            className={`bg-surface rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:border-l-4 hover:border-l-primary bg-primary-muted border-border"
              shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-primary/30`}
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-24px" },
              transition: { duration: 0.3, delay: i * 0.04 },
            })}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-3xl block" aria-hidden="true">{item.icon}</span>
                {item.popular && (
                  <span className="shrink-0 text-caption font-medium text-primary bg-primary-muted px-2.5 py-1 rounded-full">
                    Популярное
                  </span>
                )}
              </div>
              <h3 className="text-h3 font-semibold text-text mb-2">{item.title}</h3>
              <p className="text-caption text-text-muted leading-[1.65]">{item.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border gap-3">
              <span className="font-semibold text-body text-primary">
                {item.price}
              </span>
              <a
                href="#privacy"
                className="text-caption font-medium text-primary hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded shrink-0 cursor-pointer"
              >
                Записаться →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ================= DOCTORS ================= */
const DOCTORS_LIST = [
  {
    name: "Михаил Андреевич Соколов",
    role: "Хирург-имплантолог",
    experience: "Стаж 14 лет",
    detail: "Обучение в Straumann Institute (Германия, 2018). Провёл более 2 000 имплантаций.",
    Avatar: Doctor1Svg,
  },
  {
    name: "Елена Викторовна Морозова",
    role: "Стоматолог-терапевт",
    experience: "Стаж 9 лет",
    detail: "Лечение под микроскопом. Эстетические реставрации. Выпускница МГМСУ.",
    Avatar: Doctor2Svg,
  },
  {
    name: "Дмитрий Сергеевич Власов",
    role: "Ортодонт",
    experience: "Стаж 11 лет",
    detail: "Сертифицированный провайдер Invisalign с 2019. Исправляет сложные случаи.",
    Avatar: Doctor3Svg,
  },
];

function Doctor1Svg() {
  return (
    <svg viewBox="0 0 240 320" className="w-full h-full object-cover" aria-hidden="true">
      <defs>
        <linearGradient id="doc1Coat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#e5e2dd" />
        </linearGradient>
        <linearGradient id="doc1Bg" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect width="240" height="320" fill="#f0ede8" />
      <ellipse cx="120" cy="100" rx="55" ry="60" fill="#d4a574" />
      <path d="M75 95 Q120 70 165 95 Q160 120 120 120 Q80 120 75 95" fill="#2d2d2d" />
      <circle cx="105" cy="95" r="4" fill="#4b5563" />
      <circle cx="135" cy="95" r="4" fill="#4b5563" />
      <path d="M100 115 Q120 125 140 115" stroke="#4b5563" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="60" y="155" width="120" height="140" rx="8" fill="url(#doc1Coat)" stroke="#e5e2dd" strokeWidth="1" />
      <rect x="85" y="165" width="70" height="25" rx="4" fill="#2d5a3d" />
      <rect x="95" y="200" width="50" height="80" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <rect width="240" height="120" y="200" fill="url(#doc1Bg)" />
    </svg>
  );
}

function Doctor2Svg() {
  return (
    <svg viewBox="0 0 240 320" className="w-full h-full object-cover" aria-hidden="true">
      <defs>
        <linearGradient id="doc2Coat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#e5e2dd" />
        </linearGradient>
        <linearGradient id="doc2Bg" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect width="240" height="320" fill="#f0ede8" />
      <ellipse cx="120" cy="100" rx="52" ry="58" fill="#e8c4a0" />
      <path d="M80 85 L100 75 L120 85 L140 75 L160 85 L155 100 L120 95 L85 100 Z" fill="#2d2d2d" />
      <circle cx="108" cy="98" r="4" fill="#4b5563" />
      <circle cx="132" cy="98" r="4" fill="#4b5563" />
      <path d="M105 112 Q120 120 135 112" stroke="#6b5344" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="65" y="155" width="110" height="140" rx="8" fill="url(#doc2Coat)" stroke="#e5e2dd" strokeWidth="1" />
      <rect x="90" y="165" width="60" height="22" rx="4" fill="#2d5a3d" />
      <rect x="98" y="200" width="44" height="75" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <rect width="240" height="120" y="200" fill="url(#doc2Bg)" />
    </svg>
  );
}

function Doctor3Svg() {
  return (
    <svg viewBox="0 0 240 320" className="w-full h-full object-cover" aria-hidden="true">
      <defs>
        <linearGradient id="doc3Coat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#e5e2dd" />
        </linearGradient>
        <linearGradient id="doc3Bg" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect width="240" height="320" fill="#f0ede8" />
      <ellipse cx="120" cy="102" rx="54" ry="58" fill="#e8d4b8" />
      <path d="M70 95 Q120 65 170 95 Q165 118 120 118 Q75 118 70 95" fill="#c4a574" />
      <rect x="95" y="82" width="50" height="18" rx="6" fill="#e5e2dd" stroke="#4b5563" strokeWidth="1" />
      <circle cx="112" cy="92" r="3" fill="#4b5563" />
      <circle cx="128" cy="92" r="3" fill="#4b5563" />
      <path d="M102 108 Q120 116 138 108" stroke="#4b5563" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="62" y="155" width="116" height="140" rx="8" fill="url(#doc3Coat)" stroke="#e5e2dd" strokeWidth="1" />
      <rect x="88" y="165" width="64" height="24" rx="4" fill="#2d5a3d" />
      <rect x="94" y="200" width="52" height="82" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <rect width="240" height="120" y="200" fill="url(#doc3Bg)" />
    </svg>
  );
}

function Doctors() {
  const reduced = useReducedMotion();
  return (
    <section id="doctors" className="section px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="doctors-title">
      <SectionTitle id="doctors-title" className="text-balance">Врачи</SectionTitle>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {DOCTORS_LIST.map((d, i) => (
          <motion.article
            key={d.name}
            className="bg-surface p-6 rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-out font-body cursor-pointer"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-24px" },
              transition: { duration: 0.3, delay: i * 0.06 },
            })}
          >
            <div className="rounded-xl overflow-hidden mb-4 min-h-[280px] relative bg-surface-alt">
              <d.Avatar />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-h3 text-text">{d.name}</h3>
            <p className="text-caption text-primary font-medium mt-2">{d.role}</p>
            <p className="text-caption text-text-muted mt-1">{d.experience}</p>
            <p className="text-caption text-text-muted mt-3 leading-[1.65]">{d.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ================= BEFORE/AFTER ================= */
const BEFORE_AFTER_SLIDES = [
  {
    title: "Реставрация скола",
    before: <BeforeAfter1Before />,
    after: <BeforeAfter1After />,
    desc: "Скол переднего зуба → Реставрация композитом за 1 визит → 1,5 часа → от 8 000 ₽",
  },
  {
    title: "Выравнивание зубов",
    before: <BeforeAfter2Before />,
    after: <BeforeAfter2After />,
    desc: "Скученность нижнего ряда → Элайнеры Invisalign → 14 месяцев → от 85 000 ₽",
  },
  {
    title: "Имплантация",
    before: <BeforeAfter3Before />,
    after: <BeforeAfter3After />,
    desc: "Отсутствие зуба 5 лет → Имплант + коронка → 4 месяца → от 45 000 ₽",
  },
];

function BeforeAfter1Before() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="#f0ede8" />
      <path d="M40 60 L50 30 L70 25 L90 30 L110 25 L130 30 L150 28 L160 60 L150 95 L130 98 L110 95 L90 98 L70 95 L50 95 Z" fill="#e8dcc8" stroke="#c4b8a8" strokeWidth="1" />
      <path d="M88 32 L92 25 L96 32" fill="none" stroke="#8b7355" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 95 L90 98 L110 95 L130 98" stroke="#b8a898" strokeWidth="1" fill="none" />
    </svg>
  );
}

function BeforeAfter1After() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="#f0ede8" />
      <path d="M40 60 L50 30 L70 25 L90 30 L110 25 L130 30 L150 28 L160 60 L150 95 L130 98 L110 95 L90 98 L70 95 L50 95 Z" fill="#f5f0e8" stroke="#e5e2dd" strokeWidth="1" />
      <path d="M88 32 L92 28 L96 32 L92 36 Z" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <path d="M70 95 L90 98 L110 95 L130 98" stroke="#d4d0c8" strokeWidth="1" fill="none" />
    </svg>
  );
}

function BeforeAfter2Before() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="#f0ede8" />
      <path d="M30 75 L45 45 L55 75 L65 50 L75 75 L85 48 L95 75 L105 52 L115 75 L125 50 L135 75 L145 48 L160 75 L170 70" fill="#e8dcc8" stroke="#c4b8a8" strokeWidth="1" />
      <path d="M45 75 L55 75 L65 75 L75 75 L85 75 L95 75 L105 75 L115 75 L125 75 L135 75" stroke="#8b7355" strokeWidth="1" fill="none" />
    </svg>
  );
}

function BeforeAfter2After() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="#f0ede8" />
      <path d="M30 70 L45 70 L55 70 L65 70 L75 70 L85 70 L95 70 L105 70 L115 70 L125 70 L135 70 L145 70 L160 70 L170 70" fill="#f5f0e8" stroke="#e5e2dd" strokeWidth="1" />
      <path d="M45 70 L55 70 L65 70 L75 70 L85 70 L95 70 L105 70 L115 70 L125 70 L135 70" stroke="#d4d0c8" strokeWidth="1" fill="none" />
    </svg>
  );
}

function BeforeAfter3Before() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="#f0ede8" />
      <path d="M50 40 L70 35 L90 40 L110 35 L130 40 L150 38 L160 70 L150 100 L130 102 L110 100 L90 102 L70 100 L50 100 Z" fill="#e8dcc8" stroke="#c4b8a8" strokeWidth="1" />
      <rect x="88" y="70" width="24" height="32" fill="#f0ede8" stroke="#c4b8a8" strokeWidth="1" />
    </svg>
  );
}

function BeforeAfter3After() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect width="200" height="120" fill="#f0ede8" />
      <path d="M50 40 L70 35 L90 40 L110 35 L130 40 L150 38 L160 70 L150 100 L130 102 L110 100 L90 102 L70 100 L50 100 Z" fill="#f5f0e8" stroke="#e5e2dd" strokeWidth="1" />
      <rect x="86" y="55" width="28" height="48" rx="4" fill="#f5f0e8" stroke="#2d5a3d" strokeWidth="2" />
      <path d="M92 50 L100 45 L108 50 L100 58 Z" fill="#e8dcc8" stroke="#c4b8a8" strokeWidth="1" />
    </svg>
  );
}

function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const slides = BEFORE_AFTER_SLIDES;

  if (!slides.length) return null;

  return (
    <section id="before-after" className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="before-after-title">
      <SectionTitle id="before-after-title" className="text-balance">До и после</SectionTitle>
      <motion.div
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
            <motion.div
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
            </motion.div>
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
      </motion.div>
    </section>
  );
}

/* ================= REVIEWS ================= */
const REVIEWS_LIST = [
  { name: "Анна К.", stars: 5, date: "2 месяца назад", source: "Яндекс.Карты", text: "Обратилась к Елене Викторовне с запущенным кариесом. Всё прошло абсолютно без боли, объяснила каждый шаг. Первый раз в жизни вышла от стоматолога в хорошем настроении." },
  { name: "Сергей М.", stars: 5, date: "1 месяц назад", source: "Google Maps", text: "Ставил имплант у Михаила Андреевича. Боялся, что будет долго и дорого — оказалось быстро и по фиксированной цене без сюрпризов. Уже 3 месяца всё отлично." },
  { name: "Мария Т.", stars: 5, date: "3 месяца назад", source: "Яндекс.Карты", text: "Привела дочку 7 лет — боялась, что будет истерика. Врач нашёл подход, ребёнок вышел спокойный и даже доволен. Теперь ходим всей семьёй." },
  { name: "Алексей В.", stars: 5, date: "5 месяцев назад", source: "Google Maps", text: "Панически боюсь стоматологов с детства. Здесь впервые не было страха — укол почти не почувствовал, процедура заняла 40 минут. Записался уже на следующий приём." },
  { name: "Ольга Н.", stars: 5, date: "1 месяц назад", source: "Яндекс.Карты", text: "Поставила элайнеры у Дмитрия Сергеевича. Прошло полгода — результат виден уже сейчас. Всегда на связи, отвечает на вопросы даже между визитами." },
  { name: "Павел Д.", stars: 4, date: "2 месяца назад", source: "Google Maps", text: "Сломал зуб в пятницу вечером. Записали на следующее утро, приняли без ожидания. Восстановили за один визит. Спасибо за оперативность." },
];

function StarRating({ count, className = "" }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill={i < count ? "currentColor" : "none"} stroke={i < count ? "currentColor" : "#e5e2dd"} strokeWidth="1.5" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function Reviews() {
  const reduced = useReducedMotion();
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
          <motion.blockquote
            key={`${r.name}-${i}`}
            className="bg-surface p-6 rounded-2xl border border-border border-l-4 border-l-primary shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-out text-text font-body text-body leading-[1.65] cursor-pointer"
            {...(reduced ? {} : {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-24px" },
              transition: { duration: 0.3, delay: i * 0.06 },
            })}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-text">{r.name}</span>
              <StarRating count={r.stars} className="text-primary" />
            </div>
            <p className="text-caption text-text-muted mb-2">{r.date} · {r.source}</p>
            <p className="text-body leading-[1.65]">«{r.text}»</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

/* ================= GUARANTEES ================= */
function Guarantees() {
  const reduced = useReducedMotion();
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="guarantees-title">
      <SectionTitle id="guarantees-title" className="text-balance">Гарантии</SectionTitle>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          {
            icon: (
              <svg className="w-12 h-12 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            ),
            title: "Гарантия на пломбы 2 года",
            text: "Выдаём письменный гарантийный талон. Если что-то пойдёт не так — исправим бесплатно.",
          },
          {
            icon: (
              <svg className="w-12 h-12 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2c0 0-4 4-4 8 0 2.2 1.8 4 4 4s4-1.8 4-4c0-4-4-8-4-8z" />
                <path d="M12 14v6" />
                <path d="M9 18h6" />
              </svg>
            ),
            title: "Лечение без боли",
            text: "Используем современную анестезию. Если почувствуете дискомфорт — скажите, остановимся.",
          },
          {
            icon: (
              <svg className="w-12 h-12 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            ),
            title: "Перезвоним за 15 минут",
            text: "Оставьте заявку — свяжемся быстро и подберём удобное для вас время.",
          },
        ].map((item, i) => (
          <motion.article
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
const FAQ_LIST = [
  ["Больно ли лечить зубы?", "Нет. Используем современную анестезию. При необходимости подберём комфортный вид обезболивания."],
  ["Сколько длится консультация?", "Около 30 минут. За это время врач осмотрит полость рта и составит план лечения."],
  ["Как проходит первый визит?", "Осмотр, при необходимости снимок. Никаких манипуляций без вашего согласия. Можно задать вопросы до начала лечения."],
  ["Есть ли гарантии на лечение?", "Да. На пломбы и работы даём гарантию. Срок уточняйте у врача на приёме."],
  ["Как можно оплатить?", "Наличные, карты, рассрочка. Точный перечень уточняйте в регистратуре."],
  ["Как записаться онлайн?", "Оставьте заявку в форме ниже — мы перезвоним в течение 15 минут и подберём удобное время."],
];

function FAQ() {
  const reduced = useReducedMotion();
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="faq-title">
      <SectionTitle id="faq-title" className="text-balance">Частые вопросы</SectionTitle>
      <motion.div
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
      </motion.div>
    </section>
  );
}

/* ================= CONTACTS + FORM ================= */
function Contacts() {
  const reduced = useReducedMotion();
  return (
    <section id="contacts" className="section-cta px-4 sm:px-6 lg:px-8 bg-surface-alt" aria-labelledby="contacts-title">
      <SectionTitle id="contacts-title" className="text-balance">Контактная информация</SectionTitle>
      <div id="data" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          className="contents"
          {...(reduced ? {} : {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-24px" },
            transition: { duration: 0.35 },
          })}
        >
          <div className="space-y-4 text-text font-body text-body leading-[1.65]">
            <p><strong>Адрес:</strong> {CLINIC.address}</p>
            <p><strong>Метро:</strong> {CLINIC.metro}</p>
            <p><strong>Часы работы:</strong> {CLINIC.hours}</p>
            <a href={`tel:${CLINIC.phoneRaw}`} className="text-primary font-medium hover:underline block transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded">
              {CLINIC.phone}
            </a>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border" style={{ borderRadius: "16px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.6780%2C55.7722&z=16&pt=37.6780%2C55.7722,pm2rdl"
                width="100%"
                height="288"
                frameBorder="0"
                style={{ borderRadius: "16px", display: "block" }}
                title="Адрес клиники на карте"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="bg-surface rounded-2xl border border-border shadow-card-hover overflow-hidden">
            <AppointmentForm />
          </div>
        </motion.div>
      </div> 
    </section>
  );
}

/* ================= FORM ================= */
function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
    consent: false,
  });
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({ name: false, phone: false });

  function maskPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    const parts = [
      digits.slice(0, 1),
      digits.slice(1, 4),
      digits.slice(4, 7),
      digits.slice(7, 9),
      digits.slice(9, 11),
    ];
    if (!digits) return "";
    return `+${parts[0]} (${parts[1] || ""}) ${parts[2] || ""}-${parts[3] || ""}-${parts[4] || ""}`;
  }

  function update(key, value) {
    if (key === "phone") value = maskPhone(value);
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "name" || key === "phone") setTouched((t) => ({ ...t, [key]: true }));
  }

  const phoneDigits = form.phone.replace(/\D/g, "");
  const nameValid = form.name.trim().length >= 2;
  const phoneValid = phoneDigits.length >= 10;
  const showNameError = touched.name && !nameValid;
  const showPhoneError = touched.phone && !phoneValid;

  async function submit(e) {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (!nameValid || !phoneValid || !form.consent) {
      setStatus("error");
      return;
    }
    try {
      setStatus("loading");
      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, service: form.service, time: form.time }),
      });
      setStatus("success");
      setForm({ name: "", phone: "", service: "", time: "", consent: false });
      setTouched({ name: false, phone: false });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="p-8 text-left font-body">
      <h3 className="font-display text-h2 font-semibold text-text mb-2">Записаться на приём</h3>
      <p className="text-caption text-primary mb-6 leading-[1.65]">Мы перезвоним в течение 15 минут. Без спама.</p>

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <LabeledInput
            id="form-name"
            label="Имя *"
            autoComplete="name"
            value={form.name}
            onChange={(v) => update("name", v)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            invalid={showNameError}
            errorMessage={showNameError ? "Введите имя (минимум 2 символа)" : null}
            placeholder="Иван"
          />
          <LabeledInput
            id="form-phone"
            label="Телефон *"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(v) => update("phone", v)}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            invalid={showPhoneError}
            errorMessage={showPhoneError ? "Введите номер из 10 цифр" : null}
            placeholder="+7 (999) 123-45-67"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <LabeledInput id="form-service" label="Услуга" value={form.service} onChange={(v) => update("service", v)} placeholder="Консультация" />
          <LabeledInput id="form-time" label="Удобное время" value={form.time} onChange={(v) => update("time", v)} placeholder="16:00" />
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
            className="mt-1 rounded border-border text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-w-[18px] min-h-[18px]"
            aria-describedby="consent-desc"
          />
          <span id="consent-desc" className="text-caption text-text-muted leading-[1.65]">
            Я соглашаюсь с{" "}
            <a href="#privacy" className="text-primary underline hover:no-underline">политикой конфиденциальности</a>
            {" "}и даю согласие на обработку данных для связи со мной.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full min-h-[44px] h-12 md:h-14 mt-6 bg-primary text-white rounded-button font-semibold text-body px-6 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:bg-primary-hover transition-all duration-200 hover:shadow-card active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="24 48" strokeLinecap="round" />
            </svg>
            <span>Отправка…</span>
          </>
        ) : (
          "Записаться"
        )}
      </button>

      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {status === "success" && "Спасибо! Мы перезвоним в течение 15 минут."}
        {status === "error" && "Проверьте поля и согласие на обработку данных."}
      </div>
      {status === "success" && (
        <p className="text-success mt-4 font-medium text-body leading-[1.65]" role="status">Спасибо! Мы перезвоним в течение 15 минут.</p>
      )}
      {status === "error" && (
        <p className="text-error mt-4 text-caption leading-[1.65]" role="alert">Проверьте имя, телефон и согласие на обработку данных.</p>
      )}
    </form>
  );
}

function LabeledInput({ id, label, type = "text", inputMode, autoComplete, value, onChange, onBlur, placeholder, invalid, errorMessage }) {
  return (
    <div className="font-body">
      <label htmlFor={id} className="block text-caption font-medium text-text mb-2">{label}</label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className={`w-full border rounded-button min-h-[44px] h-11 px-4 text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 ${invalid ? "border-error" : "border-border"}`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={invalid || undefined}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
      />
      {errorMessage && (
        <p id={`${id}-error`} className="text-error text-caption mt-2 leading-[1.65]" role="alert">{errorMessage}</p>
      )}
    </div>
  );
}

function SectionTitle({ id, children, className = "" }) {
  return (
    <h2 id={id} className={`font-display text-h2 font-semibold text-text mb-12 md:mb-14 text-center text-balance ${className}`}>
      {children}
    </h2>
  );
}

/* ================= STICKY CTA ================= */
function StickyCTA() {
  const [contactsInView, setContactsInView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const observerRef = useRef(null);
  useEffect(() => {
    const checkMobileMenu = () => {
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileNav) {
        const isOpen = mobileNav.className.includes('max-h-[400px]');
        setMobileMenuOpen(isOpen);
      }
    };
    checkMobileMenu();
    const observer = new MutationObserver(checkMobileMenu);
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileNav) {
      observer.observe(mobileNav, { 
        attributes: true, 
        attributeFilter: ['class'] 
      });
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById("contacts");
    if (!el) {
      setContactsInView(false);
      return;
    }
    observerRef.current = new IntersectionObserver(
      ([entry]) => setContactsInView(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0.1 }
    );
    observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, []);
  if (contactsInView || mobileMenuOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-surface border-t border-border shadow-sticky p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-center gap-3 min-h-[72px]">
      <a
        href="#data"
        className="flex-1 max-w-xs bg-primary text-white min-h-[44px] h-12 px-6 rounded-button flex items-center justify-center font-body font-semibold text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:bg-primary-hover transition-all duration-200 hover:shadow-card active:scale-[0.98] cursor-pointer"
      >
        Записаться
      </a>
      <a
        href={`tel:${CLINIC.phoneRaw}`}
        className="border border-border text-text min-h-[44px] h-12 px-6 rounded-button flex items-center justify-center font-body font-medium text-body hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 active:scale-[0.98] cursor-pointer"
      >
        Позвонить
      </a>
    </div>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  const reduced = useReducedMotion();
  return (
    <motion.footer
      id="privacy"
      className="py-10 text-center text-caption text-text-muted bg-surface border-t border-border font-body leading-[1.65]"
      {...(reduced ? {} : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-24px" },
        transition: { duration: 0.3 },
      })}
    >
      <p className="mb-2">{CLINIC.name}</p>
      <a href="#privacy" className="text-primary hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded">Политика конфиденциальности</a>
    </motion.footer>
  );
}
