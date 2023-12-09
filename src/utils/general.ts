const stringToObject = (values: string) => {
  if (!values) return null;
  const object = JSON.parse(values);
  return object;
};

const objectToString = (values: any) => {
  const string = JSON.stringify(values ?? {});
  return string;
};

export default { stringToObject, objectToString };
