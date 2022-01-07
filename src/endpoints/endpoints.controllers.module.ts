import { Module } from '@nestjs/common';
import { EndpointsServicesModule } from './endpoints.services.module';
import { ExercisesController } from './exercises/exercises.controller';

@Module({
  imports: [EndpointsServicesModule],
  controllers: [ExercisesController],
})
export class EndpointsControllersModule {}
