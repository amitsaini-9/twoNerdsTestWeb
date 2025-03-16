import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable unescaped entities rule
      "@typescript-eslint/no-unused-vars": "warn", // Warn instead of error for unused vars
      "@typescript-eslint/no-explicit-any": "warn", // Warn instead of error for explicit any
      "@next/next/no-img-element": "warn", // Warn for using <img> instead of <Image>
    },
  },
];

export default eslintConfig;
