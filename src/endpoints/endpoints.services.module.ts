import { Module } from '@nestjs/common';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [ExercisesModule],
  exports: [ExercisesModule],
})
export class EndpointsServicesModule {}
