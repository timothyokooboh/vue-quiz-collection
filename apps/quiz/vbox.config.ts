import { defineConfig } from "@veebox/core";

export default defineConfig({
  classNamePrefix: "vue-learn",
  theme: {
    color: {
      primary: "#10b982",
      "primary-dark": "#047857",
      "background-light": "#ffffff",
      "background-alt": "#f8fafc",
      "card-bg": "#ffffff",
      "text-main": "#0f172a",
      "text-muted": "#64748b",
      "border-light": "#e2e8f0",
    },
    fontFamily: {
      space: "Space Grotesk",
      noto: "Noto Sans",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1),0 2px 4px -2px rgb(0 0 0 / 0.1)",
      xl: " 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);",
    },
  },
});
