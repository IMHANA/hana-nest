import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// 읽기 전용이고 필수는 아니게 함 (?)을 붙임으로써 !
// 왜냐하면 UpdateMovieDto를 쓸 때 title만 수정하거나 year만 수정하고 싶을 때가 있을 수 있기 때문.

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
