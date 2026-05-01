export const SYSTEM_MESSAGES = {
  CARD: {
    VALID: 'Card number is valid',
    INVALID: 'Card number is invalid',
    VALIDATION_SUCCESS: 'Card validation completed',
    REQUIRED: 'Card number is required',
    INVALID_FORMAT: 'Card number must be a string of digits',
    MIN_LENGTH: 'Card number must be at least 12 digits',
    MAX_LENGTH: 'Card number must not exceed 19 digits',
    WELCOME: 'Welcome to the Card Validator API. Use /api/v1/validate-card to validate card numbers.',
  },
  ERROR: {
    INTERNAL_SERVER_ERROR: 'An unexpected error occurred',
    BAD_REQUEST: 'Invalid request data',
  },
};
