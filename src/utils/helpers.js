export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const discountPercent = (number) => {
  return Math.ceil(number);
};

export const discountedPrice = (oldprice, discount) => {
  let newNumber = oldprice - oldprice * (discountPercent(discount) / 100);
  return formatPrice(newNumber);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};
