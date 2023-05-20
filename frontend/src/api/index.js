import http from "./axios.js";

export function dashboard() {
  return http.get("/dashboard");
}

export function accidents() {
  return http.get("/accidents");
}

export function accident(id) {
  return http.get("/accidents/" + id);
}

