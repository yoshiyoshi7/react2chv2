// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_POSTS = 'REQUEST_POSTS_LIVES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS_LIVES'

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
  posts_lives: json.map(item => item)
})

const fetchPosts = category => dispatch => {
  dispatch(requestPosts(category), { mode: 'cors' })
  return fetch(`http://13.112.133.111/items_${category}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

const shouldFetchPosts = (state) => {
  if (state.lives.items == null) {
    return true
  } else {
    return false
  }
}

export const selectedReddit = category => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts(category))
    }
  }
}

export const actions = {
  selectedReddit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  [REQUEST_POSTS]: (state, action) => {
    switch (action.type) {
      case REQUEST_POSTS:
        return {
          ...state
        }
      default:
        return state
    }
  },

  [RECEIVE_POSTS]: (state, action) => {
    switch (action.type) {
      case RECEIVE_POSTS:
        return {
          ...state,
          items: action.posts_lives,
        }
      default:
        return state
    }
  },

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = new Object();
export default function itReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
