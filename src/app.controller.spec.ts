import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './app.user_controller';
import { UserService } from './app.user_service';

describe('AppController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.getUser()).toBe('Hello World!');
    });
  });
});
