import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Res() response: Response) {
    const data = await this.appService.getHello();
    return response.status(HttpStatus.OK).json(data);
  }
}
