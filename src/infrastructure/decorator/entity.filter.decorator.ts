function EntityFilter(target: any, propertyKey: string) {
  const properties = target.constructor.collectedProperties();
  if (!properties.includes(propertyKey)) {
    properties.push(propertyKey);
  }
}

export { EntityFilter };
