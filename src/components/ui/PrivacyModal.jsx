import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrivacyModal } from "../../hooks/usePrivacyModal.jsx";
import { CLINIC } from "../../config/clinic.js";

export function PrivacyModal() {
  const { isOpen, closeModal } = usePrivacyModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleOverlayClick}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-surface rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden border border-border mx-2 sm:mx-0"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
          >

            <div className="flex items-start sm:items-center justify-between p-4 sm:p-6 border-b border-border gap-2">
              <h2 
                id="privacy-modal-title" 
                className="
                  font-display 
                  font-semibold 
                  text-text
                  text-lg        /* ← на мобильных */
                  sm:text-xl     /* ← на планшетах */
                  md:text-2xl    /* ← на десктопах */
                  leading-tight
                  pr-2
                "
              >
                Политика конфиденциальности
              </h2>
              <button
                onClick={closeModal}
                className="
                  min-w-[40px] 
                  min-h-[40px] 
                  sm:min-w-[44px] 
                  sm:min-h-[44px] 
                  flex 
                  items-center 
                  justify-center 
                  rounded-lg 
                  hover:bg-surface-alt 
                  transition-colors 
                  duration-200 
                  focus:outline-none 
                  focus-visible:ring-2 
                  focus-visible:ring-primary 
                  focus-visible:ring-offset-2
                  shrink-0
                "
                aria-label="Закрыть"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)] sm:max-h-[calc(80vh-88px)] font-body text-text leading-[1.65]">
              <div className="space-y-4 sm:space-y-6">
                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">1. Общие положения</h3>
                  <p className="text-sm sm:text-body text-text-muted">
                    Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО «Стоматология «Здоровая улыбка» (далее – Оператор).
                  </p>
                </section>

                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">2. Основные понятия</h3>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-body text-text-muted">
                    <li>Персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных);</li>
                    <li>Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, организующие и (или) осуществляющие обработку персональных данных;</li>
                    <li>Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными;</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">3. Цели обработки персональных данных</h3>
                  <p className="text-sm sm:text-body text-text-muted mb-1 sm:mb-2">
                    Оператор обрабатывает персональные данные Пользователя в следующих целях:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-body text-text-muted">
                    <li>Установление с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг;</li>
                    <li>Подтверждение достоверности и полноты персональных данных, предоставленных Пользователем;</li>
                    <li>Предоставление Пользователю эффективной клиентской и технической поддержки при возникновении проблем, связанных с использованием Сайта;</li>
                    <li>Предоставление доступа Пользователю на сайты или сервисы партнеров с целью получения продуктов, обновлений и услуг.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">4. Правовые основания обработки персональных данных</h3>
                  <p className="text-sm sm:text-body text-text-muted">
                    Правовыми основаниями обработки персональных данных Оператором являются:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-body text-text-muted mt-1 sm:mt-2">
                    <li>уставные документы Оператора;</li>
                    <li>договоры, заключаемые между оператором и субъектом персональных данных;</li>
                    <li>федеральные законы, иные нормативно-правовые акты в сфере защиты персональных данных;</li>
                    <li>согласия пользователей на обработку персональных данных.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">5. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h3>
                  <p className="text-sm sm:text-body text-text-muted">
                    Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
                  </p>
                </section>

                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">6. Трансграничная передача персональных данных</h3>
                  <p className="text-sm sm:text-body text-text-muted">
                    Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.
                  </p>
                </section>

                <section>
                  <h3 className="text-base sm:text-h3 font-semibold text-text mb-2 sm:mb-3">7. Заключительные положения</h3>
                  <p className="text-sm sm:text-body text-text-muted">
                    Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты или по номеру телефона:
                  </p>
                  <p className="text-sm sm:text-body text-text-muted font-semibold">
                    privacy@zdorovaya-ulybka.ru 
                  </p>
                  <p className="text-sm sm:text-body text-text-muted font-semibold">
                    {CLINIC.phone}
                  </p>
                </section>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-border">
              <button
                onClick={closeModal}
                className="w-full min-h-[40px] sm:min-h-[44px] bg-primary text-white rounded-button font-semibold text-sm sm:text-body hover:bg-primary-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Закрыть
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}