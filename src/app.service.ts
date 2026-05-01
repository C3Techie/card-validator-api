import { Injectable } from '@nestjs/common';
import { SYSTEM_MESSAGES } from './constants/system.messages';

@Injectable()
export class AppService {
  getHello(): string {
    return SYSTEM_MESSAGES.CARD.WELCOME;
  }
}
