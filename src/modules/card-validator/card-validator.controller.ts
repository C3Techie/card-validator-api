import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse as SwaggerResponse } from '@nestjs/swagger';
import { CardValidatorService } from './card-validator.service';
import { ValidateCardDto } from './dtos/validate-card.dto';
import { SYSTEM_MESSAGES } from 'src/constants/system.messages';

@ApiTags('validation')
@Controller('validate-card')
export class CardValidatorController {
  constructor(private readonly cardValidatorService: CardValidatorService) {}

  @Post()
  @ApiOperation({ summary: 'Validate a card number using Luhn algorithm' })
  @SwaggerResponse({ status: 201, description: 'Validation results returned' })
  @SwaggerResponse({ status: 400, description: 'Invalid input data' })
  validate(@Body() validateCardDto: ValidateCardDto) {
    const { card_number } = validateCardDto;
    const isValid = this.cardValidatorService.validateLuhn(card_number);
    const cardType = this.cardValidatorService.getCardType(card_number);

    return {
      message: isValid
        ? SYSTEM_MESSAGES.CARD.VALID
        : SYSTEM_MESSAGES.CARD.INVALID,
      data: {
        is_valid: isValid,
        card_type: cardType,
      },
    };
  }
}
