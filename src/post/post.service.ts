import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(private readonly httpService: HttpService) {}
  async findAll() {
    try {
      const posts = await this.httpService
        .get('https://jsonplaceholder.typicode.com/posts')
        .toPromise();
      return posts.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
