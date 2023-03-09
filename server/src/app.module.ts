import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SheetFileModule } from './sheet-file/sheet-file.module';
import databaseConfig from './configs/database.config';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase, {}),
    UserModule,
    SheetFileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
