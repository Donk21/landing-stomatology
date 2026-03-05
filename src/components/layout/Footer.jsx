import { motion as Motion } from "framer-motion";
import { CLINIC } from "../../config/clinic.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

export function Footer() {
  const reduced = useReducedMotion();
  return (
    <Motion.footer
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
    </Motion.footer>
  );
}
