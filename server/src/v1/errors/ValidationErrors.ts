import { BaseError } from './BaseError';
import { ZodError } from 'zod';

export class ValidationError extends BaseError {
  public errors: Record<string, string>[];

  constructor(error: ZodError) {
    super('Validation failed', 400);
    this.name = 'ValidationError';
    this.errors = error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }));
  }
}