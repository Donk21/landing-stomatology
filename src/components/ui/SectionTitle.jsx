export function SectionTitle({ id, children, className = "" }) {
  return (
    <h2 id={id} className={`font-display text-h2 font-semibold text-text mb-12 md:mb-14 text-center text-balance ${className}`}>
      {children}
    </h2>
  );
}
