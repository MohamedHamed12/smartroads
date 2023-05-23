export default function getElapsedDate(date) {
  const now = new Date();
  const elapsedSeconds = (now - date) / 1000;
  let mins = Math.ceil(elapsedSeconds / 60);
  let hours = Math.floor(mins / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  mins = mins % 60;
  hours = hours % 24;
  days = days % 30;
  months = months % 12;

  if (years > 0) return `${years}y ago`;
  if (months > 0) return `${months}m ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return `${mins}m ago`;
}
