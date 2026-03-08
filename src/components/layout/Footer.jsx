import { motion as Motion } from "framer-motion";
import { CLINIC } from "../../config/clinic.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";
import { usePrivacyModal } from "../../hooks/usePrivacyModal.jsx";

export function Footer() {
  const reduced = useReducedMotion();
  const { openModal } = usePrivacyModal();

  return (
    <Motion.footer
      className="py-10 text-center text-caption text-text-muted bg-surface border-t border-border font-body leading-[1.65]"
      {...(reduced ? {} : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-24px" },
        transition: { duration: 0.3 },
      })}
    >
      <p className="mb-2">{CLINIC.name}</p>
      <button
        onClick={openModal}
        className="text-primary hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded bg-transparent border-0 p-0 cursor-pointer"
      >
        Политика конфиденциальности
      </button>
    </Motion.footer>
  );
}