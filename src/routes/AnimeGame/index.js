import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'animegame',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AnimeGame = require('./containers/AnimeGameContainer').default
      const reducer = require('./modules/animeGame').default

      /*  Add the reducer to the store on key 'animegame'  */
      injectReducer(store, { key: 'animegame', reducer })

      /*  Return getComponent   */
      cb(null, AnimeGame)

    /* Webpack named bundle   */
    }, 'animegame')
  }
})
