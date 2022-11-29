import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class GalleryService {
  constructor(private readonly httpService: HttpService) {}
  async findAll() {
    try {
      const gallery = await this.httpService
        .get('https://jsonplaceholder.typicode.com/photos')
        .toPromise();
      return gallery.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      const gallery = await this.httpService
        .get('https://jsonplaceholder.typicode.com/photos')
        .toPromise();
      const galleryData = gallery.data;
      const responseData = galleryData.filter((item) => item.albumId === id);
      return responseData;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
