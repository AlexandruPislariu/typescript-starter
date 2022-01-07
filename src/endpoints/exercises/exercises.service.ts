import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './entities/create.exercise.dto';
import { Exercise } from './entities/exercise';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>,
  ) {}

  async findAll(): Promise<Exercise[]> {
    return this.exercisesRepository.find();
  }

  findOne(id: number): Promise<Exercise> {
    return this.exercisesRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.exercisesRepository.delete(id);
  }

  create(createUserDto: CreateExerciseDto): Promise<Exercise> {
    const exercise = new Exercise();
    exercise.name = createUserDto.name;
    exercise.description = createUserDto.description;

    return this.exercisesRepository.save(exercise);
  }
}
