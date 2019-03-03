import {
  TOPICS_FETCH,
  TOPICS_ADD,
  TOPICS_ADD_ERROR
} from '../constants/actionTypes';

const doTopicsFetch = () => ({
  type: TOPICS_FETCH
});

const doTopicsAdd = topics => ({
  type: TOPICS_ADD,
  topics
});

const doTopicsAddError = error => ({
  type: TOPICS_ADD_ERROR,
  error
});

export {
  doTopicsFetch,
  doTopicsAdd,
  doTopicsAddError
};
