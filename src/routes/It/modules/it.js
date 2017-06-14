// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  posts: json.map(item => item)
})

const fetchPosts = () => dispatch => {
  dispatch(requestPosts(getState().it), {mode: 'cors'})
  return fetch(`http://13.112.133.111/items_${getState().it}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}


export const selectedReddit = () => {
  
  return (dispatch, getState) => {
    return dispatch(fetchPosts())
  }
}


export const actions = {
  selectedReddit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_REDDIT]: (state, action) => {
    switch (action.type) {
      case SELECT_REDDIT:
        return action.payload
      default:
        return state
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = "its"
export default function itReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
