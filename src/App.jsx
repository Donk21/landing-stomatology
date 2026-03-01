import { useState } from "react";
import { motion } from "framer-motion";
import Image from "../public/clinic.jpg";

export default function DentalLanding() {
    return (
        <div className="bg-white text-gray-800 scroll-smooth">
            <SEO />
            <Header />
            <Hero />
            <Services />
            <Prices />
            <Doctors />
            <BeforeAfter />
            <Reviews />
            <FAQ />
            <Contacts />
            <MobileStickyCTA />
            <Footer />
        </div>
    );
}

/* ================= SEO ================= */
function SEO() {
    return (
        <>
            <title>Частная стоматология — запись на консультацию</title>
            <meta
                name="description"
                content="Современная стоматология. Без боли. Запишитесь на первичную консультацию онлайн или получите обратный звонок."
            />

            {/* Open Graph */}
            <meta property="og:title" content="Частная стоматология" />
            <meta
                property="og:description"
                content="Запишитесь на консультацию к опытным врачам"
            />

            {/* LocalBusiness schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Dentist",
                        name: "Частная стоматология",
                        telephone: "+7 800 555 35 35",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Адрес клиники",
                            addressLocality: "Город",
                            addressCountry: "RU",
                        },
                    }),
                }}
            />
        </>
    );
}

/* ================= HEADER ================= */
function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
                <div className="font-semibold text-lg">DentalCare</div>

                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#services">Услуги</a>
                    <a href="#prices">Цены</a>
                    <a href="#doctors">Врачи</a>
                    <a href="#contacts">Контакты</a>
                </nav>

                <a
                    href="tel:+78005553535"
                    className="bg-teal-600 text-white px-5 h-11 flex items-center rounded-xl"
                >
                    Позвонить
                </a>
            </div>
        </header>
    );
}

/* ================= HERO ================= */
function Hero() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        Здоровая улыбка без боли и переплат
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Первичная консультация и план лечения от опытных стоматологов
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <AnchorButton href="#contacts">Записаться</AnchorButton>
                        <OutlineButton href="#contacts">Получить консультацию</OutlineButton>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-2xl aspect-[4/2] flex items-center justify-center">
                    <img src={Image} className="rounded-2xl"></img>
                </div>
            </div>
        </section>
    );
}

/* ================= SERVICES ================= */
function Services() {
    const list = [
        {
            title: "Лечение кариеса",
            desc: "Удаление поражённых тканей и восстановление зуба современными пломбами"
        },
        {
            title: "Лечение пульпита",
            desc: "Безболезненное лечение корневых каналов под анестезией"
        },
        {
            title: "Лечение периодонтита",
            desc: "Комплексное лечение воспаления тканей вокруг корня зуба"
        },
        {
            title: "Удаление зуба",
            desc: "Аккуратное удаление с минимальной травматичностью"
        },
        {
            title: "Имплантация",
            desc: "Восстановление утраченных зубов современными имплантами"
        },
        {
            title: "Отбеливание",
            desc: "Профессиональное безопасное осветление эмали"
        },
        {
            title: "Ортодонтия",
            desc: "Исправление прикуса и выравнивание зубов"
        },
        {
            title: "Профгигиена",
            desc: "Удаление налёта и камня для здоровья зубов"
        },
        {
            title: "Протезирование",
            desc: "Восстановление зубов коронками и протезами"
        }
    ];

    return (
        <section id="services" className="py-16 px-4 bg-gray-50">
            <SectionTitle>Услуги</SectionTitle>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {list.map((item) => (
                    <a
                        href="#contacts"
                        key={item.title}
                        className="bg-white 
                                    rounded-2xl 
                                    p-6 
                                    shadow-sm 
                                    border
                                    transition
                                    duration-300
                                    hover:bg-gray-200"
                    >
                        <div className="text-lg font-semibold mb-2">
                            {item.title}
                        </div>

                        <p className="text-gray-600 text-sm">
                            {item.desc}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}

/* ================= PRICES ================= */
function Prices() {
    const rows = [
        ["Консультация", "от 0 ₽"],
        ["Лечение кариеса", "от 3500 ₽"],
        ["Имплантация", "от 25000 ₽"],
        ["Отбеливание", "от 9000 ₽"],
    ];

    return (
        <section id="prices" className="py-16 px-4">
            <SectionTitle>Цены</SectionTitle>

            <div className="max-w-3xl mx-auto overflow-hidden border rounded-2xl">
                <table className="w-full text-left">
                    <tbody>
                    {rows.map(([name, price]) => (
                        <tr key={name} className="border-b last:border-none">
                            <td className="p-4">{name}</td>
                            <td className="p-4 font-semibold">{price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

/* ================= DOCTORS ================= */
function Doctors() {
    const list = [
        { name: "Иванов И.И.", exp: "10 лет", spec: "Хирург" },
        { name: "Петрова А.А.", exp: "8 лет", spec: "Терапевт" },
        { name: "Сидоров Д.С.", exp: "12 лет", spec: "Ортодонт" },
    ];

    return (
        <section id="doctors" className="py-16 px-4 bg-gray-50">
            <SectionTitle>Врачи</SectionTitle>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                {list.map((d) => (
                    <div key={d.name} className="bg-white p-6 rounded-2xl border">
                        <div className="bg-gray-100 rounded-xl h-48 mb-4 flex items-center justify-center">
                            Фото
                        </div>
                        <div className="font-semibold">{d.name}</div>
                        <div className="text-sm text-gray-600">{d.spec}</div>
                        <div className="text-sm text-gray-600">Стаж: {d.exp}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= BEFORE AFTER ================= */
function BeforeAfter() {
    const [index, setIndex] = useState(0);
    const slides = [1, 2, 3];

    if (!slides.length)
        return (
            <section className="py-16 text-center">Кейсы скоро появятся</section>
        );

    return (
        <section className="py-16 px-4">
            <SectionTitle>До / После</SectionTitle>

            <div className="max-w-3xl mx-auto text-center">
                <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center mb-4">
                    Кейс {slides[index]}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                        className="px-4 h-11 border rounded-xl"
                    >
                        Назад
                    </button>
                    <button
                        onClick={() => setIndex((i) => (i + 1) % slides.length)}
                        className="px-4 h-11 border rounded-xl"
                    >
                        Далее
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ================= REVIEWS ================= */
function Reviews() {
    const reviews = [
        "Очень внимательные врачи",
        "Быстро и без боли",
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <SectionTitle>Отзывы</SectionTitle>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {reviews.length ? (
                    reviews.map((r, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border">
                            {r}
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-full">
                        Отзывы скоро появятся
                    </div>
                )}
            </div>
        </section>
    );
}

/* ================= FAQ ================= */
function FAQ() {
    const list = [
        ["Больно ли лечить зубы?", "Нет, используем современную анестезию"],
        ["Сколько длится консультация?", "Около 30 минут"],
    ];

    return (
        <section className="py-16 px-4">
            <SectionTitle>FAQ</SectionTitle>

            <div className="max-w-3xl mx-auto space-y-4">
                {list.map(([q, a]) => (
                    <details key={q} className="border rounded-xl p-4">
                        <summary className="font-semibold cursor-pointer">{q}</summary>
                        <div className="mt-2 text-gray-600">{a}</div>
                    </details>
                ))}
            </div>
        </section>
    );
}

/* ================= CONTACTS ================= */
function Contacts() {
    return (
        <section id="contacts" className="py-16 px-4 bg-gray-50">
            <SectionTitle>Контакты</SectionTitle>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div>Адрес: г. Москва, ул. Бауманская, 32</div>
                    <a href="tel:+78005553535" className="text-teal-600">
                        +7 (800) 555 35-35
                    </a>

                    <div className="bg-gray-200 rounded-2xl h-72 flex items-center justify-center">
                        Карта
                    </div>
                </div>

                <AppointmentForm />
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
    });

    const [status, setStatus] = useState("idle");

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
        return `+${parts[0]} (${parts[1] || ""}) ${parts[2] || ""}-${
            parts[3] || ""
        }-${parts[4] || ""}`;
    }

    function update(key, value) {
        if (key === "phone") value = maskPhone(value);
        setForm({ ...form, [key]: value });
    }

    async function submit(e) {
        e.preventDefault();

        if (!form.name || form.phone.length < 10) {
            setStatus("error");
            return;
        }

        try {
            setStatus("loading");

            await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            setStatus("success");
            setForm({ name: "", phone: "", service: "", time: "" });
        } catch {
            setStatus("error");
        }
    }

    return (
        <form onSubmit={submit} className="bg-white p-6 rounded-2xl border">
            <div className="font-semibold text-lg mb-4">Записаться</div>

            <Input
                placeholder="Имя"
                value={form.name}
                onChange={(v) => update("name", v)}
            />

            <Input
                placeholder="Телефон"
                value={form.phone}
                onChange={(v) => update("phone", v)}
            />

            <Input
                placeholder="Услуга"
                value={form.service}
                onChange={(v) => update("service", v)}
            />

            <Input
                placeholder="Удобное время"
                value={form.time}
                onChange={(v) => update("time", v)}
            />

            <button
                className="w-full h-12 bg-teal-600 text-white rounded-xl mt-4"
                disabled={status === "loading"}
            >
                {status === "loading" ? "Отправка..." : "Записаться"}
            </button>

            {status === "success" && (
                <div className="text-green-600 mt-3">Заявка отправлена</div>
            )}

            {status === "error" && (
                <div className="text-red-600 mt-3">Ошибка отправки</div>
            )}
        </form>
    );
}

/* ================= UI ================= */
function Input({ value, onChange, placeholder }) {
    return (
        <input
            className="w-full border rounded-xl h-11 px-3 mb-3"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required
        />
    );
}

function SectionTitle({ children }) {
    return (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {children}
        </h2>
    );
}

function AnchorButton({ href, children }) {
    return (
        <a
        href="#contacts"
        className="
        relative
        bg-teal-600
        text-black
        px-6 py-3
        rounded-xl
        overflow-hidden
        group
        transition
        duration-300
        hover:scale-105
        hover:shadow-lg
        hover:text-white
        "
        >
        <span className="
            absolute inset-0
            bg-black/10
            opacity-0
            group-hover:opacity-100
            transition
        " />
        
        <span className="relative z-10">
            Записаться
        </span>
        </a>
    );
}

function OutlineButton({ href, children }) {
    return (
        <a
        href="#contacts"
        className="
        relative
        border border-teal-600
        text-black
        px-6 py-3
        rounded-xl
        overflow-hidden
        group
        transition
        duration-300
        hover:text-white
        hover:scale-105
        hover:shadow-lg
        "
        >
        <span className="
            absolute inset-0
            bg-teal-600
            opacity-0
            group-hover:opacity-100
            transition
        " />

        <span className="relative z-10">
            Получить консультацию
        </span>
        </a>
    );
}

/* ================= MOBILE CTA ================= */
function MobileStickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t md:hidden">
            <a
                href="#contacts"
                className="bg-teal-600 text-white h-12 rounded-xl flex items-center justify-center"
            >
                Записаться
            </a>
        </div>
    );
}

/* ================= FOOTER ================= */
function Footer() {
    return (
        <footer className="py-10 text-center text-sm text-gray-500">
            <a href="/privacy">Политика конфиденциальности</a>
        </footer>
    );
}
