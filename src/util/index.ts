export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

interface Object {
  [propName: string]: any;
}

export const cleanObject = (object: object) => {
  const obj = Object.assign({}, { ...object });
  Object.keys(obj).forEach((key) => {
    //@ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete obj[key];
    }
  });
  return obj;
};
