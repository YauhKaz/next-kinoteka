import { Provider } from 'react-redux';
import '../styles/globals.css';
// import store from '../store/store';
import { useStore } from '../store/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
  <Provider store = {store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp;
