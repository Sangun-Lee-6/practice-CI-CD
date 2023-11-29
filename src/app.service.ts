import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('GET 요청, / 로 보냄');
    return 'Hello World!';
  }
}
