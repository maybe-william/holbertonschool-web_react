import { Map } from 'immutable';

const map1 = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map1.set(2, 'Benjamin').set(4, 'Oliver');

export { map1, map2 };
