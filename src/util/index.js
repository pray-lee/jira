export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const obj = Object.assign({}, { ...object });
  Object.keys(obj).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete obj[key];
    }
  });
  return obj;
};
