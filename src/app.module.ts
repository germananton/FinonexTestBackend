import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './gallery/gallery.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [GalleryModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
