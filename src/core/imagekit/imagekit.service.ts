import { Inject, Injectable } from '@nestjs/common';
import ImageKit from 'imagekit';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import IKResponse from 'imagekit/dist/libs/interfaces/IKResponse';

@Injectable()
export class ImagekitService {
  constructor(
    @Inject('IMAGEKIT_SERVICE') private readonly imagekit: ImageKit,
  ) {}

  uploadFile(file: Express.Multer.File): Promise<IKResponse<UploadResponse>> {
    console.log(this.imagekit);
    return this.imagekit.upload({
      folder: 'vercel',
      file: file.buffer,
      fileName: file.originalname,
    });
  }
}
