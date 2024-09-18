import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { AuthModule } from './auth/auth.module';
// import { NotesModule } from './notes/notes.module';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-notes-app'),
    AuthModule,
    NotesModule, // Ваша строка подключения
    // AuthModule,
    // NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
