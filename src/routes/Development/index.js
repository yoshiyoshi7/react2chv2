import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'development',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Development = require('./containers/DevelopmentContainer').default
      const reducer = require('./modules/development').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'development', reducer })

      /*  Return getComponent   */
      cb(null, Development)

    /* Webpack named bundle   */
    }, 'development')
  }
})
