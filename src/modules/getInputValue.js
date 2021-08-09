import { pathOr, pipe, tap, trim } from 'ramda';

const input = document.querySelector('input');

export const getInputValue = pipe(
  pathOr('', ['target', 'value']),
  trim
  // tap(console.log)
);

export default input;
