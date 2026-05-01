import { Module } from '@nestjs/common';
import { CardValidatorService } from './card-validator.service';
import { CardValidatorController } from './card-validator.controller';

@Module({
  providers: [CardValidatorService],
  controllers: [CardValidatorController],
})
export class CardValidatorModule {}
