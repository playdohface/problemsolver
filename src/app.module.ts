import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CalculationService } from './calculation/calculation.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CalculationService],
})
export class AppModule {}
