# Card Validator API

A clean and robust API for validating card numbers using the Luhn algorithm, built with NestJS and TypeScript.

## Features

- **Luhn Algorithm Validation**: Accurate validation of credit/debit card numbers.
- **Card Type Detection**: Basic identification of Visa, MasterCard, Amex, and Discover.
- **Swagger Documentation**: Interactive API docs available at `/api/docs`.
- **Strict TypeScript**: Configured with `strict: true` for maximum type safety.
- **HNG Standard Response Format**: All responses are wrapped in a consistent `{ message, data }` structure.
- **Global Error Handling**: Standardized error responses with appropriate HTTP status codes.
- **DTO Validation**: Input validation using `class-validator` and `class-transformer`.

## Architecture Choice

The project follows a modular structure inspired by clean architecture principles:

- **Modules**: Logic is encapsulated into feature-specific modules (e.g., `CardValidatorModule`).
- **Service Layer**: Orchestrates business logic (Luhn validation).
- **Controller Layer**: Handles HTTP requests and uses DTOs for input validation.
- **Common Layer**: Contains cross-cutting concerns like Interceptors and Decorators.
- **Interceptors**: `ResponseTransformInterceptor` ensures all responses follow the mandatory HNG SDK format.

## Technology Stack

- **Framework**: [NestJS](https://nestjs.com/) (Node.js)
- **Language**: TypeScript
- **Validation**: `class-validator`
- **Testing**: Jest

## Setup and Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd card-validator-api

# Install dependencies
npm install
```

### Running the Project

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

### Running Tests

```bash
# Unit tests
npm run test
```

## API Base URLs

- **API Root**: `http://localhost:3000`
- **API Version 1**: `http://localhost:3000/api/v1`
- **Interactive Documentation (Swagger)**: `http://localhost:3000/api/docs`

## API Documentation

### Validate Card Number

**Endpoint**: `POST /api/v1/validate-card`

**Request Body**:
```json
{
  "card_number": "799273987130"
}
```

**Success Response (Valid Card)**:
- **Status Code**: 201 Created
```json
{
  "message": "Card number is valid",
  "data": {
    "is_valid": true,
    "card_type": "unknown"
  }
}
```

**Success Response (Invalid Card)**:
- **Status Code**: 201 Created
```json
{
  "message": "Card number is invalid",
  "data": {
    "is_valid": false,
    "card_type": "visa"
  }
}
```

**Error Response (Bad Request)**:
- **Status Code**: 400 Bad Request
```json
{
  "statusCode": 400,
  "message": [
    "Card number must be at least 12 digits and Card number must not exceed 19 digits"
  ],
  "error": "Bad Request"
}
```

## Implementation Decisions

1. **NestJS**: Chosen for its robust architectural patterns, dependency injection, and excellent TypeScript support, which aligns with the requirement for `strict` mode.
2. **Response Wrapping**: Implemented via a Global Interceptor to ensure consistency across the entire API without cluttering controllers.
3. **Luhn Algorithm**: Used as the primary validation logic as it is the industry standard for verifying the checksum of identification numbers.
4. **Validation Pipes**: Used `ValidationPipe` with `whitelist: true` to prevent unwanted properties and ensure data integrity.

## Author

- **Chris**

## License

This project is licensed under the MIT License.
