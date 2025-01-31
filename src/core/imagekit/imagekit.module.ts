import { Global, Module } from '@nestjs/common';
import { ImagekitService } from './imagekit.service';
import ImageKit from 'imagekit';
@Global()
@Module({
  providers: [
    {
      provide: 'IMAGEKIT_SERVICE',
      useFactory: () => {
        console.log('ImagekitService', ImageKit);
        return new ImageKit({
          publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
          privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
          urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
        });
      },
    },
    ImagekitService,
  ],
  exports: [ImagekitService],
})
export class ImagekitModule {}
