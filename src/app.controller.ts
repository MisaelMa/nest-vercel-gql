import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagekitService } from './core/imagekit/imagekit.service';
import { url } from 'inspector';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    private readonly imagekit: ImagekitService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const response = await this.imagekit.uploadFile(file);
    console.log(response);
    return {
      url: response.url,
      id: response.fileId,
    };
  }
}
