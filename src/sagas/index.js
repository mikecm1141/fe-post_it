import { takeEvery, all } from 'redux-saga/effects';

import {
  TOPICS_FETCH
} from '../constants/actionTypes';
import { handleTopicsFetch } from './topics';

function *watchAll() {
  yield all([
    takeEvery(TOPICS_FETCH, handleTopicsFetch)
  ])
}

export default watchAll;
