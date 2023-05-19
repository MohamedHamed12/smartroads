import http from "./axios.js";

export function dashboard() {
  return http.get("/dashboard");
}
