import {
  TOPICS_ADD,
  TOPICS_ADD_ERROR
} from '../constants/actionTypes';

const INITIAL_STATE = {
  topics: [],
  error: null
};

const applyTopicsAdd = (state, action) => ({
  topics: action.topics.allTopics,
  error: null
});

const applyTopicsAddError = (state, action) => ({
  topics: [],
  error: action.error
})

function topicsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TOPICS_ADD : {
      return applyTopicsAdd(state, action);
    }
    case TOPICS_ADD_ERROR : {
      return applyTopicsAddError(state, action);
    }
    default : return state;
  }
}

export default topicsReducer;
