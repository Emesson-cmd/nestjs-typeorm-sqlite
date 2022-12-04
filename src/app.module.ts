import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';

@Module({
  imports: [PersonModule, TypeOrmModule.forRoot({
      "database": "./db.sql",
      "type": "sqlite",
      "synchronize": true,
      "entities": ["dist/**/*.model.js"]    
  })],
})
export class AppModule {}
