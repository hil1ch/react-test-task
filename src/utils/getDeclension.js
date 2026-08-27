export const getDeclension = (num, forms) => {
  const absNum = Math.abs(num) % 100;
  const lastDigit = absNum % 10;

  if (absNum > 10 && absNum < 20) {
    return forms[2];
  }

  if (lastDigit === 1) {
    return forms[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1];
  }

  return forms[2];
};
