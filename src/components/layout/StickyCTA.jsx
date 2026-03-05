import { CLINIC } from "../../config/clinic.js";
import { useSectionInView } from "../../hooks/useSectionInView.js";
import { useMobileMenuOpen } from "../../hooks/useMobileMenuOpen.jsx";

export function StickyCTA() {
  const contactsInView = useSectionInView("contacts");
  const [mobileMenuOpen] = useMobileMenuOpen();

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
