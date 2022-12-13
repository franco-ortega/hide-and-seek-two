import Head from 'next/head';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Hide and Seek Game</title>
        <meta name='description' content='Hide and Seek game' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>;
    </div>
  );
};

export default Layout;
