import http from "./axios.js";

export function dashboard() {
  return http.get("/dashboard");
}

export function accidents() {
  return http.get("/accidents");
}

export async function accident(id) {
  const data = await http.get("/accidents/" + id);
  // TODO: should be implement in the backend
  data.unit = { location: { latt: 30.605726, long: 31.779532 } };
  return data;
}

export function accidentUpdate(id, data) {
  return http.patch(`/accidents/1/`, data);
}
