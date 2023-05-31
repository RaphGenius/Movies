const TOKEN_API = import.meta.env.VITE_TOKEN_API;

export const headersApi = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN_API}`,
};
