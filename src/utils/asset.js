/** Prefix public asset paths with Vite's base (needed for GitHub Pages). */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
