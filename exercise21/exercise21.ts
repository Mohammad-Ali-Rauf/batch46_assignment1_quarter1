interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

const countries: Country[] = [
  {
    name: 'USA',
    capital: 'Washington D.C.',
    population: 331002651,
    language: 'English',
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    population: 37742154,
    language: 'English, French',
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    population: 83149300,
    language: 'German',
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    population: 25499884,
    language: 'English',
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    population: 211049527,
    language: 'Portuguese',
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    population: 126476461,
    language: 'Japanese',
  },
  {
    name: 'India',
    capital: 'New Delhi',
    population: 1393409038,
    language: 'Hindi, English',
  },
];

console.log(countries);
