import nextPlugin from "@next/eslint-plugin-next"

const ignoredGlobs = [
  "**/node_modules/**",
  "**/.next/**",
  "**/dist/**",
  "**/out/**",
  "pnpm-lock.yaml",
]

export default [
  {
    ignores: ignoredGlobs,
  },
  nextPlugin.configs["core-web-vitals"],
]
