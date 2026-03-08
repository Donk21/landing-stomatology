export function StatsBar() {
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
          <p className="text-caption text-text-muted mt-1">гарантия на услуги</p>
        </div>
      </div>
    </section>
  );
}
