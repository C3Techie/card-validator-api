import { Test, TestingModule } from '@nestjs/testing';
import { CardValidatorService } from './card-validator.service';

describe('CardValidatorService', () => {
  let service: CardValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardValidatorService],
    }).compile();

    service = module.get<CardValidatorService>(CardValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateLuhn', () => {
    it('should return true for valid card numbers', () => {
      // Common valid test card numbers (Luhn valid)
      expect(service.validateLuhn('79927398713')).toBe(true);
      expect(service.validateLuhn('49927398716')).toBe(true);
    });

    it('should return false for invalid card numbers', () => {
      expect(service.validateLuhn('79927398710')).toBe(false);
      expect(service.validateLuhn('49927398712')).toBe(false);
    });
  });

  describe('getCardType', () => {
    it('should identify Visa', () => {
      expect(service.getCardType('4111111111111')).toBe('visa');
    });

    it('should identify MasterCard', () => {
      expect(service.getCardType('5111111111111')).toBe('mastercard');
    });

    it('should identify Amex', () => {
      expect(service.getCardType('3411111111111')).toBe('amex');
    });

    it('should return unknown for other types', () => {
      expect(service.getCardType('99999111111111')).toBe('unknown');
    });
  });
});
