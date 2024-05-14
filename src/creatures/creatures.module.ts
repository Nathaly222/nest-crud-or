import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreaturesEntity } from './entities/creature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreaturesEntity])],
  controllers: [CreaturesController],
  providers: [CreaturesService],
})
export class CreaturesModule {}
