import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import { sendAppointment } from "../../api/sendAppointment.js";
import { LabeledInput } from "../../components/ui/LabeledInput.jsx";
import { usePrivacyModal } from "../../hooks/usePrivacyModal.jsx";

const calendarStyles = `
  .react-datepicker__day--outside-month {
    visibility: hidden !important;
    pointer-events: none !important;
  }
  .react-datepicker {
    font-size: 0.7rem !important;
    border: 1px solid #e5e2dd !important;
    border-radius: 8px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
    background-color: white !important;
    display: flex !important;
    width: 279px !important;
    overflow: hidden !important;
    position: relative !important;
  }
  .react-datepicker__month-container {
    width: 180px !important;
    padding: 0.3rem !important;
    background: white !important;
  }
  .react-datepicker__header {
    background-color: white !important;
    border-bottom: 1px solid #e5e2dd !important;
    padding: 0.2rem 0 !important;
  }
  .react-datepicker__current-month {
    font-size: 0.7rem !important;
    font-weight: 600 !important;
    color: #111827 !important;
    line-height: 25px !important;
    height: 25px !important;
    margin: 0 20px !important;
    text-align: center !important;
  }
  .react-datepicker__day-name {
    color: #6b7280 !important;
    font-size: 0.6rem !important;
    width: 1.4rem !important;
    line-height: 1.4rem !important;
    margin: 0.05rem !important;
  }
  .react-datepicker__day {
    width: 1.4rem !important;
    line-height: 1.4rem !important;
    margin: 0.05rem !important;
    font-size: 0.65rem !important;
    border-radius: 50% !important;
  }
  .react-datepicker__day:hover {
    background-color: #f3f4f6 !important;
  }
  .react-datepicker__day--selected {
    background-color: #2d5a3d !important;
    color: white !important;
  }
  .react-datepicker__navigation {
    top: 0.4rem !important;
    width: 1.4rem !important;
    height: 1.4rem !important;
  }
  .react-datepicker__navigation--previous {
    left: 0.2rem !important;
  }
  .react-datepicker__navigation--next {
    right: 99px !important;
  }
  .react-datepicker__navigation-icon::before {
    border-color: #2d5a3d !important;
    border-width: 2px 2px 0 0 !important;
    height: 0.5rem !important;
    width: 0.5rem !important;
  }
  .react-datepicker__time-container {
    width: 89px !important;
    border-left: 1px solid #e5e2dd !important;
    background: #f9fafb !important;
    position: absolute !important;
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
  }
  .react-datepicker__time-box {
    width: 89px !important;
  }
  .react-datepicker__time-title {
    font-size: 0.65rem !important;
    font-weight: 600 !important;
    color: #111827 !important;
    line-height: 25px !important;
    height: 25px !important;
    background: #f9fafb !important;
    border-bottom: 1px solid #e5e2dd !important;
    text-align: center !important;
  }
  .react-datepicker__time-list {
    background: #f9fafb !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .react-datepicker__time-list-item {
    height: 25px !important;
    line-height: 25px !important;
    font-size: 0.6rem !important;
    text-align: center !important;
    cursor: pointer !important;
  }
  .react-datepicker__time-list-item:hover {
    background-color: #e5e7eb !important;
  }
  .react-datepicker__time-list-item--selected {
    background-color: #2d5a3d !important;
    color: white !important;
  }
  .react-datepicker__triangle {
    display: none !important;
  }
`;

registerLocale("ru", ru);

function maskPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  
  let formatted = "";
  
  if (digits.length > 0) {
    formatted = "+" + digits[0];
  }
  if (digits.length > 1) {
    formatted += " (";
    for (let i = 1; i < Math.min(4, digits.length); i++) {
      formatted += digits[i];
    }
    if (digits.length >= 4) {
      formatted += ")";
    }
  }
  if (digits.length > 4) {
    formatted += " ";
    for (let i = 4; i < Math.min(7, digits.length); i++) {
      formatted += digits[i];
    }
  }
  if (digits.length > 7) {
    formatted += "-";
    for (let i = 7; i < Math.min(9, digits.length); i++) {
      formatted += digits[i];
    }
  }
  if (digits.length > 9) {
    formatted += "-";
    for (let i = 9; i < Math.min(11, digits.length); i++) {
      formatted += digits[i];
    }
  }
  
  return formatted;
}

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    datetime: null,
    consent: false,
  });
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({ name: false, phone: false });
  const { openModal } = usePrivacyModal();

  function handlePhoneChange(e) {
    const input = e.target;
    const rawValue = input.value;
    
    let digits = rawValue.replace(/\D/g, "");
    if (digits.length > 11) {
      digits = digits.slice(0, 11);
    }
    
    const formatted = maskPhone(digits);
    
    setForm((prev) => ({ ...prev, phone: formatted }));
    
    setTimeout(() => {
      if (input !== document.activeElement) return;
      input.setSelectionRange(formatted.length, formatted.length);
    }, 0);
  }

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "name" || key === "phone") setTouched((t) => ({ ...t, [key]: true }));
  }

  const phoneDigits = form.phone.replace(/\D/g, "");
  const nameValid = form.name.trim().length >= 2;
  const phoneValid = phoneDigits.length === 11;
  const showNameError = touched.name && !nameValid;
  const showPhoneError = touched.phone && !phoneValid;

  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const filterTime = (time) => {
    const hours = time.getHours();
    return hours >= 9 && hours < 21;
  };

  const formatDateForDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  async function submit(e) {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (!nameValid || !phoneValid || !form.consent || !form.datetime) {
      setStatus("error");
      return;
    }
    try {
      setStatus("loading");
      
      const formattedDate = form.datetime ? form.datetime.toISOString().split('T')[0] : "";
      const formattedTime = form.datetime ? 
        `${form.datetime.getHours().toString().padStart(2, "0")}:${form.datetime.getMinutes().toString().padStart(2, "0")}` : "";
      
      await sendAppointment({ 
        name: form.name, 
        phone: phoneDigits, 
        service: form.service, 
        date: formattedDate,
        time: formattedTime 
      });
      setStatus("success");
      setForm({ name: "", phone: "", service: "", datetime: null, consent: false });
      setTouched({ name: false, phone: false });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="p-8 text-left font-body">
      <style>{calendarStyles}</style>
      
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
          <div className="font-body">
            <label htmlFor="form-phone" className="block text-caption font-medium text-text mb-2">
              Телефон *
            </label>
            <input
              id="form-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={`w-full border rounded-button min-h-[44px] h-11 px-4 text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 ${showPhoneError ? "border-error" : "border-border"}`}
              value={form.phone}
              onChange={handlePhoneChange}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              placeholder="+7 (999) 123-45-67"
              aria-invalid={showPhoneError || undefined}
              aria-describedby={showPhoneError ? "form-phone-error" : undefined}
            />
            {showPhoneError && (
              <p id="form-phone-error" className="text-error text-caption mt-2 leading-[1.65]" role="alert">
                Введите номер из 11 цифр
              </p>
            )}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <LabeledInput 
            id="form-service" 
            label="Услуга" 
            value={form.service} 
            onChange={(v) => update("service", v)} 
            placeholder="Консультация" 
          />
          
          <div className="font-body">
            <label htmlFor="form-datetime" className="block text-caption font-medium text-text mb-2">
              Дата и время *
            </label>
            <div className="relative">
              <DatePicker
                id="form-datetime"
                selected={form.datetime}
                onChange={(datetime) => setForm((prev) => ({ ...prev, datetime }))}
                minDate={today}
                maxDate={maxDate}
                locale="ru"
                dateFormat="dd.MM.yyyy HH:mm"
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="Время"
                showTimeSelect
                filterTime={filterTime}
                placeholderText="Выбрать"
                openToDate={today}
                className="w-full border border-border rounded-button min-h-[44px] h-11 px-4 text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 cursor-pointer"
                calendarClassName="bg-white border-0"
                dayClassName={(date) => {
                  const isSelected = form.datetime && date.toDateString() === form.datetime.toDateString();
                  return `hover:bg-gray-100 rounded-full transition-all duration-200 ${
                    isSelected ? "bg-primary text-white hover:bg-primary-hover font-bold" : ""
                  }`;
                }}
                popperClassName="z-50"
                popperPlacement="bottom-start"
                showPopperArrow={false}
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            {form.datetime && (
              <p className="text-[0.65rem] text-primary mt-1 font-medium">
                {formatDateForDisplay(form.datetime)}
              </p>
            )}
            <p className="text-[0.6rem] text-text-muted mt-1">9:00-21:00</p>
          </div>
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
            Согласен с{" "}
            <button
              type="button"
              onClick={openModal}
              className="text-primary underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded bg-transparent border-0 p-0 inline cursor-pointer"
            >
              политикой
            </button>
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
        {status === "success" && "Спасибо!"}
        {status === "error" && "Ошибка"}
      </div>
      {status === "success" && (
        <p className="text-success mt-4 font-medium text-body leading-[1.65]" role="status">Спасибо!</p>
      )}
      {status === "error" && (
        <p className="text-error mt-4 text-caption leading-[1.65]" role="alert">Проверьте поля</p>
      )}
    </form>
  );
}