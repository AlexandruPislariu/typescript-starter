import { Module } from '@nestjs/common';
import { EndpointsControllersModule } from './endpoints/endpoints.controllers.module';

@Module({
  imports: [EndpointsControllersModule],
})
export class AppModule {}
