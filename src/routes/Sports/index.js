import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'sports',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Sports = require('./containers/SportsContainer').default
      const reducer = require('./modules/sports').default

      /*  Add the reducer to the store on key 'sports'  */
      injectReducer(store, { key: 'sports', reducer })

      /*  Return getComponent   */
      cb(null, Sports)

    /* Webpack named bundle   */
    }, 'sports')
  }
})
