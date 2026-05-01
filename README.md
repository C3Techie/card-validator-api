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

## API Documentation

### Validate Card Number

**Endpoint**: `POST /api/v1/validate-card`

**Request Body**:
```json
{
  "card_number": "79927398713"
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

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
