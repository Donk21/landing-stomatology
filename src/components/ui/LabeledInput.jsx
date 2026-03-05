export function LabeledInput({
  id,
  label,
  type = "text",
  inputMode,
  autoComplete,
  value,
  onChange,
  onBlur,
  placeholder,
  invalid,
  errorMessage,
}) {
  return (
    <div className="font-body">
      <label htmlFor={id} className="block text-caption font-medium text-text mb-2">
        {label}
      </label>
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
        <p id={`${id}-error`} className="text-error text-caption mt-2 leading-[1.65]" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
