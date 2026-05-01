import { Injectable } from '@nestjs/common';

@Injectable()
export class CardValidatorService {
  /**
   * Validates a card number using the Luhn algorithm.
   * @param cardNumber The card number to validate
   * @returns boolean indicating if the card number is valid
   */
  validateLuhn(cardNumber: string): boolean {
    const digits = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let isEven = false;

    // Loop through digits from right to left
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits.charAt(i), 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  }

  /**
   * Gets the card type based on common prefixes.
   * @param cardNumber The card number
   * @returns string indicating the card type
   */
  getCardType(cardNumber: string): string {
    const patterns = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      amex: /^3[47]/,
      discover: /^6(?:011|5)/,
    };

    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(cardNumber)) {
        return type;
      }
    }

    return 'unknown';
  }
}
