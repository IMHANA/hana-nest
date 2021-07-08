import {
  BadGatewayException,
  Controller,
  Get,
  HttpException,
  NotFoundException,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './app.user_service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('list')
  // @UseFilters(HttpException)
  getUser(): string {
    throw new BadGatewayException();
    return this.UserService.getUser();
  }

  @Get('/hello')
  sayHello(): string {
    return this, this.UserService.getHi();
  }
}
