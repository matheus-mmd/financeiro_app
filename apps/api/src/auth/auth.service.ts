import { Injectable } from '@nestjs/common';
import { Session, sessionSchema } from '@financeiro/shared';

@Injectable()
export class AuthService {
  validateSession(payload: unknown): Session {
    return sessionSchema.parse(payload);
  }
}
