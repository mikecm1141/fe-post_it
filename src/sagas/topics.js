import { call, put } from 'redux-saga/effects';
import { doTopicsAdd, doTopicsAddError } from '../actions/topics';
import { topicsFetch } from '../api';

function* handleTopicsFetch(action) {
  try {
    const result = yield call(topicsFetch);
    yield put(doTopicsAdd(result.data));
  } catch (error) {
    yield put(doTopicsAddError(error));
  }
}

export {
  handleTopicsFetch
};
