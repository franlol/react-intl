import en from './en.json';
import es from './es.json';
import { TLanguages } from './languages.types';

const languages: Array<TLanguages> = [
  { name: en.name, value: en.locale },
  { name: es.name, value: es.locale }
];

export default languages;
