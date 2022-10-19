export const isFalsy = (value: any) => (value === 0 ? false : !value);

interface Object {
  [propName: string]: any;
}
export const cleanObject = (object: Object) => {
  const obj = Object.assign({}, { ...object });
  Object.keys(obj).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete obj[key];
    }
  });
  return obj;
};
