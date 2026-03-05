import { useState } from "react";
import { sendAppointment } from "../../api/sendAppointment.js";
import { LabeledInput } from "../../components/ui/LabeledInput.jsx";

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

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
    consent: false,
  });
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({ name: false, phone: false });

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
      await sendAppointment({ name: form.name, phone: form.phone, service: form.service, time: form.time });
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
