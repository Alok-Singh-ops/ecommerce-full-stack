import { BaseError } from './BaseError';
import { Prisma } from '@prisma/client';

export class DatabaseError extends BaseError {
  constructor(error: Error) {
    super('Database error occurred', 500, true);
    this.name = 'DatabaseError';
    
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          this.message = 'Unique constraint violation';
          this.statusCode = 409;
          break;
        case 'P2025':
          this.message = 'Record not found';
          this.statusCode = 404;
          break;
        default:
          this.message = `Database error: ${error.message}`;
      }
    }
  }
}