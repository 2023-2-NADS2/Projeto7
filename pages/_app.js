import '../styles/globals.css';
import VLibras from '@djpfs/react-vlibras';
import { Fade } from 'react-awesome-reveal';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
        <VLibras forceOnload={true} />
    </>
  );
}

export default MyApp;
