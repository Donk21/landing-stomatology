/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        display: ["var(--text-display)", { lineHeight: "var(--text-display-line)", letterSpacing: "var(--text-display-tracking)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--text-h1-line)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--text-h2-line)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--text-h3-line)" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "var(--text-body-lg-line)" }],
        body: ["var(--text-body)", { lineHeight: "var(--text-body-line)" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--text-caption-line)" }],
      },
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-muted": "var(--color-primary-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        error: "var(--color-error)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        card: "var(--radius-2xl)",
        button: "var(--radius-xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        sticky: "var(--shadow-sticky)",
        focus: "var(--shadow-focus)",
      },
      maxWidth: {
        "content": "72rem",
        "7xl": "80rem",
      },
      spacing: {
        "scale-1": "var(--space-1)",
        "scale-2": "var(--space-2)",
        "scale-3": "var(--space-3)",
        "scale-4": "var(--space-4)",
        "scale-5": "var(--space-5)",
        "scale-6": "var(--space-6)",
        "scale-8": "var(--space-8)",
        "scale-10": "var(--space-10)",
        "scale-12": "var(--space-12)",
        "scale-16": "var(--space-16)",
        "scale-20": "var(--space-20)",
        "scale-24": "var(--space-24)",
        "scale-32": "var(--space-32)",
      },
    },
  },
  plugins: [],
};
