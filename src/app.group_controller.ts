import { Controller, Get } from '@nestjs/common';
import { GroupService } from './app.group_service';

@Controller()
export class GroupController {
  constructor(private readonly appService: GroupService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
