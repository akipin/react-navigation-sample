import { StackNavigator } from 'react-navigation'
import Home from './Home'
import Next from './Next'

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Next: {
    screen: Next,
  },
}, {
  initialRouteName: 'Home',
})
