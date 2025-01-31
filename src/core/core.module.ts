import { Module } from '@nestjs/common';
import { ImagekitModule } from './imagekit/imagekit.module';

@Module({
  imports: [ImagekitModule]
})
export class CoreModule {}
