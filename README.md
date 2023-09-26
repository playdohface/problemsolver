# Calculations

To run, clone this repository, and then run:

```shell
npm install &&\
npm run start
```
And then open `localhost:3000` in your favorite browser. 

To add or edit calculations, edit the list of calculations in `src/calculations/calculations.ts`.

A calculation is defined as follows:

```typescript
export interface Calculation {
  name: string; //The name to display
  id: string; //A unique identifier, that also acts as the route, do not use spaces or special characters
  description: string; //A description to display
  calculate: (inp: any) => number | string | Promise<number | string>; // the function that performs the calculation. The input-object will be populated with attributes corresponding to the 'name'-attributes in the defined inputs. Note that the values may have to be parsed (from string) manually in some cases. Can be async. 
  inputs: Input[]; // A list of definitions of inputs.
}

//Input closely follows the HTML5 Input-Element 
export interface Input {
  name: string; //the variable name 
  label: string; //the user facing name
  type: string; // the type of input. Currently supported: 'number' and 'text'
  required?: boolean; // whether or not the variable is required
  max?: string; // a maximum value(for type='number' only), as a string (e.g. '0' for 0)
  min?: string; // a minimum value 
}

```
