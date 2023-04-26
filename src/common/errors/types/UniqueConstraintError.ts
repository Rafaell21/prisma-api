import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueContraintErro extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueFiled = e.meta.target;

    super(`A record with this ${uniqueFiled} already exists.`);
  }
}
