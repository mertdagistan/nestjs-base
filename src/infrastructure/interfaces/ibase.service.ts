export interface IBaseService<TFilterDto, TListDto, TModelDto> {
  getAll(filterDto: TFilterDto): Promise<TListDto[]>;
  get(id: number): Promise<TModelDto>;
  update(entity: TModelDto): Promise<TModelDto>;
  create(entity: TModelDto): Promise<number>;
  delete(id: number);
}
