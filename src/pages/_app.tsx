import { AppProps } from 'next/app';
import { Header } from '../componentes/Header'
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
