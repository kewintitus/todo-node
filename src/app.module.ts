import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://kewintitus:${process.env.MONGODB_USERPASSWD}@cluster0.u3hqbzi.mongodb.net/?retryWrites=true&w=majority`,
    ),
    TasksModule,
  ],
})
export class AppModule {}
