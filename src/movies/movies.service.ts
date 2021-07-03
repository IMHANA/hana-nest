import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
    //데이터베이스 연동한다면 return은 쿼리문이 되야함
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
    // parseInt(id) 는 +id 라고 바꿀수 있다고 해서 변경
  }
}
