type Combinable = string | number;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const sum = add(1, 2);
const strConcat = add('hello', 'ze');
const strConcat2 = add('hello', 1000);