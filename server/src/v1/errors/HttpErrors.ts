import { BaseError } from './BaseError';

export class NotFoundError extends BaseError {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
  }
}

export class BadRequestError extends BaseError {
  constructor(message: string = 'Bad request') {
    super(message, 400);
  }
}

export class UnauthorizedError extends BaseError {
  
  constructor(message: string = 'Unauthorized access') {
    super(message, 401);
  }
}

export class ForbiddenError extends BaseError {
  constructor(message: string = 'Forbidden access') {
    super(message, 403);
  }
}