import { Calculation } from './calculation.interface';

export const calculations: Calculation[] = [
  {
    name: 'Hypotenuse berechnen',
    id: 'hypotenuse',
    description: 'Berechne die Hypotenuse',
    calculate: (inp) => {
      return Math.sqrt(
        inp.ankathete * inp.ankathete + inp.gegenkathete * inp.gegenkathete,
      );
    },
    inputs: [
      {
        name: 'ankathete',
        label: 'Ankathete',
        type: 'number',
        min: '0',
        required: true,
      },
      {
        name: 'gegenkathete',
        label: 'Gegenkathete',
        type: 'number',
        required: true,
        min: '0',
      },
    ],
  },
  {
    name: 'Modulo',
    id: 'modulo',
    description: 'Modulo-Operation (Rest der Integer-Division)',
    calculate: (inp) => {
      return inp.dividend != 0
        ? inp.divisor % inp.dividend
        : 'Nicht definiert.';
    },
    inputs: [
      { name: 'divisor', label: 'Divisor', type: 'number', required: true },
      { name: 'dividend', label: 'Dividend', type: 'number', required: true },
    ],
  },
  {
    name: 'Kreisumfang berechnen',
    id: 'umfang',
    description: 'Umfang eines Kreises',
    calculate: (inp) => {
      return inp.durchmesser * 3.1415;
    },
    inputs: [
      {
        name: 'durchmesser',
        label: 'Durchmesser',
        type: 'number',
        min: '0',
        required: true,
      },
    ],
  },
  {
    name: 'Chuck Norris Witz finden',
    id: 'chuck',
    description: 'Finde einen Chuck Norris Witz',
    calculate: async (inp) => {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${inp.keyword}`,
      );
      const json = await res.json();
      return json?.result?.[0]?.value ?? 'Nichts gefunden.';
    },
    inputs: [{ name: 'keyword', label: 'Stichwort', type: 'text' }],
  },
];
