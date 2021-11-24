import Sport from './public/Sport.png';
import Psychologia from './public/Psychologia.png';
import Space from './public/Space.png';
import Romantic from './public/Romantic.png';
import Middleages from './public/Middleages.png';
import Fairy from './public/Fairy.png';
import Best from './public/Best.png';
import Melodramas from './public/Melodramas.png';
import Horror from './public/Horror.png';
import TVshows from './public/TVshows.png';
import Army from './public/Army.png';
import Cities from './public/Cities.png';


const DUMMY_SUBS = [
  {
    id: 's1',
    title: 'Sports broadcasts',
    url: Sport,
  },
  {
    id: 's2',
    title: 'Psychological films',
    url: Psychologia,
  },
  {
    id: 's3',
    title: 'Films about space',
    url: Space,
  },
  {
    id: 's4',
    title: 'Romantic movies',
    url: Romantic,
  },
  {
    id: 's5',
    title: 'Movies about the middle ages',
    url: Middleages,
  },
  {
    id: 's6',
    title: 'Fairy tales',
    url: Fairy,
  },
  {
    id: 's7',
    title: 'Best Movies',
    url: Best,
  },
  {
    id: 's8',
    title: 'The best melodramas',
    url: Melodramas,
  },
  {
    id: 's9',
    title: 'Horror movies',
    url: Horror,
  },
  {
    id: 's10',
    title: 'Russian TV Shows',
    url: TVshows,
  },
  {
    id: 's11',
    title: 'Army films',
    url: Army,
  },
  {
    id: 's12',
    title: 'Cities of the world',
    url: Cities,
  },
];

export function getAllSubs() {
  return DUMMY_SUBS;
}