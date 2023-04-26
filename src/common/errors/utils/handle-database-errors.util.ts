import { DatabaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueContraintErro } from '../types/UniqueConstraintError';

enum PrismaErrors {
  UniqueContraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueContraintFail:
      return new UniqueContraintErro(e);

    default:
      return new DatabaseError(e.message);
  }
};
