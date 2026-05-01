import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardValidatorModule } from './modules/card-validator/card-validator.module';

@Module({
  imports: [CardValidatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
