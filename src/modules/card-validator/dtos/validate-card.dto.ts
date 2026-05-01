import { IsNotEmpty, IsString, Matches, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SYSTEM_MESSAGES } from 'src/constants/system.messages';

export class ValidateCardDto {
  @ApiProperty({
    description: 'The card number to validate',
    example: '799273987130',
    minLength: 12,
    maxLength: 19,
  })
  @IsNotEmpty({ message: SYSTEM_MESSAGES.CARD.REQUIRED })
  @IsString({ message: SYSTEM_MESSAGES.CARD.INVALID_FORMAT })
  @Matches(/^\d+$/, { message: SYSTEM_MESSAGES.CARD.INVALID_FORMAT })
  @Length(12, 19, {
    message: `${SYSTEM_MESSAGES.CARD.MIN_LENGTH} and ${SYSTEM_MESSAGES.CARD.MAX_LENGTH}`,
  })
  card_number!: string;
}
