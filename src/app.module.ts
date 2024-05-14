import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreaturesEntity } from './creatures/entities/creature.entity';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'YYYmIkUnAKstRvgFBJYOIzZVUHVGCOlJ',
      username: 'postgres',
      entities: [CreaturesEntity],
      database: 'Railway',
      synchronize: true,
      logging: true,
    }),
    CreaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}