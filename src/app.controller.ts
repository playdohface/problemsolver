import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { CalculationService } from './calculation/calculation.service';

@Controller()
export class AppController {
  constructor(private readonly calculationService: CalculationService) {}

  @Get()
  @Render('index')
  root() {
    return {
      message: 'Hello!',
      calculations: this.calculationService.getAll(),
    };
  }

  @Get(':id')
  @Render('input')
  calculation(@Param('id') id: string) {
    return this.calculationService.findById(id);
  }

  @Post(':id')
  @Render('output')
  async calculate(@Param('id') id: string, @Body() inputs) {
    const calc = this.calculationService.findById(id);
    const info = calc.inputs.map((i) => {
      return { label: i.label, value: inputs[i.name] };
    });
    return {
      result: await calc.calculate(inputs),
      name: calc.name,
      info,
    };
  }
}
