// 서비스에서 값을 받아올때 타입을 지정하기 위해서, 서비스와 컨트롤러에서 DTO를 만들어야 한다.
// DTO는 기본적으로 클래스.
// 샤럄들이 movie를 만들기 위해서 필요한 것들을 나열한다.
// 사람들이 보내야 하는 정보는 title, year, genres이다. id를 보내는 것이 아님.

import { IsNumber, IsOptional, IsString } from 'class-validator';

// 데이터베이스를 연동할 경우에는, 데이터베이스에 있는 테이블의 컬럼 정보가 되는 것 같음.
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
