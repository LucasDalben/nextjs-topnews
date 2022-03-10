import { AppProps } from 'next/app';
import { Header } from '../componentes/Header'
import { Provider as NextAuthProvider } from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header></Header>
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
