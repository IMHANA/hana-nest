import { Injectable, NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // Movie라는 빈 배열을 만들었음. create로 생성 된 Movie를 배열에 넣을 것임
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
    //데이터베이스 연동한다면 return은 쿼리문이 되야함
  }

  getOne(id: string): Movie {
    // parseInt(id) 는 +id 라고 바꿀수 있다고 해서 변경
    const movie = this.movies.find((movie) => movie.id === +id);
    // 입력한 movie가 존재하지 않으면 예외처리
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string) {
    //deleteOne(id: string): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    //return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    //원하는 id를 가진 movie를 가져오고
    const movie = this.getOne(id);
    // 해당 id를 가진 movie를 삭제
    this.deleteOne(id);
    // 과거의 데이터에 새로운 데이터를 더해서 새로운 movie를 만드는것.
    this.movies.push({ ...movie, ...updateData });
  }
}
