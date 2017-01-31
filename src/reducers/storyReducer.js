import initialState from './initialState';

export default function (state = initialState.stories, action) {
  switch (action.type) {
    case 'LOVE':
      return state;
    default:
      return state;
  }
}
