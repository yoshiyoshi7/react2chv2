import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'socialgame',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SocialGame = require('./containers/SocialGameContainer').default
      const reducer = require('./modules/socialGame').default

      /*  Add the reducer to the store on key 'socialgame'  */
      injectReducer(store, { key: 'socialgame', reducer })

      /*  Return getComponent   */
      cb(null, SocialGame)

    /* Webpack named bundle   */
    }, 'socialgame')
  }
})
