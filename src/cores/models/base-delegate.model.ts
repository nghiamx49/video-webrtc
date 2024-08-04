export type BaseDelegateModel<T extends object = any> = {
  findMany: (params?: {
    skip?: number;
    take: number;
    where?: any;
    orderBy?: any;
  }) => Promise<Array<T>>;
  findUnique: (params: { where: any }) => Promise<T>;
  create: (params: { data: any }) => Promise<T>;
};
