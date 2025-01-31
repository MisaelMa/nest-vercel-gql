import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModulePackage } from '@nestjs/config';

@Module({
  imports: [
    ConfigModulePackage.forRoot({
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: '.env',
    }),
  ],
})
export class ConfigModule {}
