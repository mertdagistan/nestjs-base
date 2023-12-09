function applyAutoWhere(tableName: string, dbo: any, dto: any, queryBuilder: any) {
  const propertyNames = dbo.collectedProperties();
  propertyNames.forEach((column) => {
    if (dto.hasOwnProperty(column) && dto[column] !== null) {
      queryBuilder = queryBuilder.where(`${tableName}.${column} = :value`, { value: dto[column] });
    }
  });
  return queryBuilder;
}
export { applyAutoWhere };
