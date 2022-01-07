import { Module } from '@nestjs/common';
import { ApiConfigModule } from './api-config/api.config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ApiConfigModule, DatabaseModule],
  exports: [ApiConfigModule, DatabaseModule],
})
export class CommonModule {}
