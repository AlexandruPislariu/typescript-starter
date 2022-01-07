import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Exercise } from './entities/exercise';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([Exercise])],
  providers: [ExercisesService],
  exports: [ExercisesService],
})
export class ExercisesModule {}
