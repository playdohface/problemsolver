import { Injectable } from '@nestjs/common';
import { Calculation } from './calculation.interface';
import { calculations } from './calculations';

@Injectable()
export class CalculationService {
  private calculations: Calculation[] = calculations;

  getAll() {
    return this.calculations;
  }

  findById(id: string) {
    return this.calculations.find((c) => c.id === id);
  }
}
