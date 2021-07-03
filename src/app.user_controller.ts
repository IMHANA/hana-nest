import { Controller, Get } from '@nestjs/common';
import { UserService } from './app.user_service';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getUser(): string {
    return this.UserService.getUser();
  }

  @Get('/hello')
  sayHello(): string {
    return this, this.UserService.getHi();
  }
}
