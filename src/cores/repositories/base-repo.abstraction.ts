import { Injectable } from '@nestjs/common';
import { PaginationModel } from '@cores/models/pagination.model';

import { BaseDelegateModel } from '@cores/models/base-delegate.model';

@Injectable()
export abstract class BaseRepoAbstraction<
  ResponseType,
  Delegate extends BaseDelegateModel,
  CreateInput,
  WhereInput,
  OrderByInput,
  WhereUniqueInput,
> {
  protected collection: Delegate;

  protected constructor() {}

  public async get(params: {
    pagination?: PaginationModel;
    where?: WhereInput;
    orderBy?: OrderByInput;
  }): Promise<Array<ResponseType>> {
    const { pagination, where, orderBy } = params;
    return this.collection.findMany({
      ...(pagination && {
        skip: pagination.skip,
        take: pagination.take,
      }),
      ...(where && { where: where }),
      ...(orderBy && { orderBy: orderBy }),
    });
  }

  public async getOne(params: {
    where: WhereUniqueInput;
  }): Promise<ResponseType> {
    const { where } = params;
    return this.collection.findUnique({
      where,
    });
  }

  public async createUser(data: CreateInput): Promise<ResponseType> {
    return this.collection.create({
      data,
    });
  }
}
