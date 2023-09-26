import { Input } from 'src/input/input.interface';

export interface Calculation {
  name: string;
  id: string;
  description: string;
  calculate: (inp: any) => number | string | Promise<number | string>;
  inputs: Input[];
}
