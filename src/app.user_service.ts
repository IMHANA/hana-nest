import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Hana code!';
  }

  getHi(): string {
    return 'Hi Nest';
  }
}
