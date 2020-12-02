import { Map } from 'immutable';

export const map = Map()
  .set(1, 'Liam')
  .set(2, 'Noah')
  .set(3, 'Elijah')
  .set(4, 'Oliver')
  .set(5, 'Jacob')
  .set(6, 'Lucas');

export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');
