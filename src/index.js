import 'bootstrap/dist/css/bootstrap.min.css';
import input from './modules/getInputValue';
import { makeSearchRequestIfValid } from './api/utils';

input.addEventListener('keyup', makeSearchRequestIfValid);
