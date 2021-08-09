import { always, equals, ifElse, isEmpty, pipe, prop, concat } from 'ramda';
import { getInputValue } from '../../modules/getInputValue';
import { displayNoResult, displayResult } from '../../modules/resultTemplates';

const endpoint = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const getWikipediaSearchUrlFor = concat(endpoint);

const render = markup => {
  const results = document.getElementById('results');
  results.innerHTML = markup;
};

const searchAndRenderResults = pipe(getWikipediaSearchUrlFor, url =>
  fetch(url)
    .then(res => res.json())
    .then(
      ifElse(
        pipe(prop('title'), equals('Not found.')),
        displayNoResult,
        displayResult
      )
    )
    .then(render)
    .catch(err => console.log(err))
);

export const makeSearchRequestIfValid = pipe(
  getInputValue,
  ifElse(isEmpty, always, searchAndRenderResults)
);
