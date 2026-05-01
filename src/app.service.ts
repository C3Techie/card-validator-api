import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Card Validator API. Use /api/v1/validate-card to validate card numbers.';
  }
}
