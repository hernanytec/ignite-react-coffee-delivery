export interface CoffeeProps {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

export const coffeesData = [
  {
    id: 'coffee-01',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: 'coffees/Expresso.svg',
  },
  {
    id: 'coffee-02',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    image: 'coffees/Americano.svg',
  },
  {
    id: 'coffee-03',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
    image: 'coffees/Expresso Cremoso.svg',
  },
  {
    id: 'coffee-04',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
    image: 'coffees/Cafe Gelado.svg',
  },
  {
    id: 'coffee-05',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: 'coffees/Cafe com Leite.svg',
  },
  {
    id: 'coffee-06',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: 'coffees/Latte.svg',
  },
  {
    id: 'coffee-07',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: 'coffees/Capuccino.svg',
  },
  {
    id: 'coffee-08',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: 'coffees/Macchiato.svg',
  },
  {
    id: 'coffee-09',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: 'coffees/Mocaccino.svg',
  },
  {
    id: 'coffee-10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
    image: 'coffees/Chocolate Quente.svg',
  },
  {
    id: 'coffee-11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcóolico', 'gelado'],
    image: 'coffees/Cubano.svg',
  },
  {
    id: 'coffee-12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
    image: 'coffees/Havaiano.svg',
  },
  {
    id: 'coffee-13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
    image: 'coffees/Arabe.svg',
  },
  {
    id: 'coffee-14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    image: 'coffees/Irlandes.svg',
  },
]
