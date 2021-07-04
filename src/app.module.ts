import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './movies/app.controller';
// app.module은 AppController와 AppProvider만 가지고 있어야 한다.
// 그래서 여기있는 MoviesService랑 MoviesController를 movies.module로 옮김
// 왜냐면 NestJS에서 앱은 여러개의 모듈로 구성되어 있음
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
