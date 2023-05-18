const scalers = ["K", "M", "B"];
const scalerValues = {
  K: 1e3,
  M: 1e6,
  B: 1e9,
};

/**
 * compress large number to a shorter text with scaler letter:
 *  1000 -> 1K, 2000000 -> 2M, 2100000 -> 2.1M
 */
export default function compressNumber(num) {
  let i = 0;
  while (i < scalers.length && num >= scalerValues[scalers[i]]) {
    i++;
  }

  i--;
  if (i == -1)
    return num.toString();

  num /= scalerValues[scalers[i]];
  
  return num.toFixed(1) + scalers[i];
}
