/**
 * Helper function to get the correct asset path for GitHub Pages
 * @param {string} path - The path relative to public folder (e.g., 'img/logo.png' or '/img/logo.png')
 * @returns {string} - The full path including base URL
 */
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Return base + cleanPath, ensuring no double slashes
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
