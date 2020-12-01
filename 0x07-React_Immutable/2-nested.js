import { getIn, Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  return getIn(Map(object), array, undefined);
}
