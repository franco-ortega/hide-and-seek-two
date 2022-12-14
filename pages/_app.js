import Layout from '../components/layout/Layout';
import { GameProvider } from '../state/GameContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GameProvider>
  );
}

export default MyApp;
