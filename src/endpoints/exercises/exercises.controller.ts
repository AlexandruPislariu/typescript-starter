import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateExerciseDto } from './entities/create.exercise.dto';
import { Exercise } from './entities/exercise';
import { ExercisesService } from './exercises.service';

@Controller()
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post('/exercises')
  create(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    console.log('CREATE');
    return this.exercisesService.create(createExerciseDto);
  }

  @Get('/exercises')
  getExercises(): Promise<Exercise[]> {
    console.log('GET ALL');
    return this.exercisesService.findAll();
  }

  @Get('/exercises/:id')
  async findOne(@Param('id') id: number): Promise<Exercise> {
    console.log('GET EXERCISE ' + id);
    const exercise = await this.exercisesService.findOne(id);

    if (!exercise) {
      throw new HttpException('Exercise not found', HttpStatus.NOT_FOUND);
    }

    return exercise;
  }

  @Delete('/exercises/:id')
  remove(@Param('id') id: number): Promise<void> {
    console.log('REMOVE EXERCISE ' + id);
    return this.exercisesService.remove(id);
  }
}
