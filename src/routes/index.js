// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import ItRoute from './It'
import SocialGameRoute from './SocialGame'
import NewsRoute from './News'
import SportsRoute from './Sports'
import AnimeGameRoute from './AnimeGame'
import LivesRoute from './Lives'
import EntertainersRoute from './Entertainers'
import DevelopmentRoute from './Development'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: ItRoute(store),
  childRoutes: [
    // CounterRoute(store),
    SocialGameRoute(store),
    NewsRoute(store),
    SportsRoute(store),
    AnimeGameRoute(store),
    LivesRoute(store),
    EntertainersRoute(store),
    DevelopmentRoute(store),
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
