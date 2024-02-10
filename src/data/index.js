import comOS from '../assets/image/comOS.webp';
import comTS from '../assets/image/comTS.jpg';
import comOH from '../assets/image/comOH.jpg';
import comTH from '../assets/image/comTH.jpg';
import comOB from '../assets/image/comOB.jpg';
import comTB from '../assets/image/comTB.jpg';

export const dataWithMatches = [
  {
    id: 1,
    comOne: 'Руан',
    comTwo: 'Монако',
    date: 'Сегодня',
    time: '22:45',
    logoOne: comOS,
    logoTwo: comTS,
    sport: 'Футбол',
    league: 'Франция. Кубок. 1/8 финала',
  },
  {
    id: 2,
    comOne: 'Аль-Хиляль',
    comTwo: 'Эр-Рияд',
    date: 'Сегодня',
    time: '21:00',
    logoOne: comOS,
    logoTwo: comTS,
    sport: 'Футбол',
    league: 'Товарищеский турнир',
  },
  {
    id: 3,
    comOne: 'Бастония',
    comTwo: 'АСВЕЛ Виллербан',
    date: 'Сегодня',
    time: '22:30',
    logoOne: comOB,
    logoTwo: comTB,
    sport: 'Баскетбол',
    league: 'Евролига ULEB',
  },
  {
    id: 4,
    comOne: 'Мемфис Гриззлис',
    comTwo: 'Чикаго Буллз',
    date: 'Завтра',
    time: '04:00',
    logoOne: comOB,
    logoTwo: comTB,
    sport: 'Баскетбол',
    league: 'NBA',
  },
  {
    id: 5,
    comOne: 'Авнгард',
    comTwo: 'Спартак',
    date: '15 февраля',
    time: '16:30',
    logoOne: comOH,
    logoTwo: comTH,
    sport: 'Хоккей',
    league: 'Чемпионат КХЛ',
  },
  {
    id: 6,
    comOne: 'Нью-ДжерсиДевилз',
    comTwo: 'Калгари Флэймз',
    date: '16 февраля',
    time: '3:08',
    logoOne: comOH,
    logoTwo: comTH,
    sport: 'Хоккей',
    league: 'НХЛ',
  },
];

export const dataWithInputElement = [
  { id: 'comonOne', value: 'На победу хозяев', htmlFor: 'comonOne' },
  { id: 'draw', value: 'На ничью', htmlFor: 'draw' },
  { id: 'comonTwo', value: 'На победу гостей', htmlFor: 'comonTwo' },
];
