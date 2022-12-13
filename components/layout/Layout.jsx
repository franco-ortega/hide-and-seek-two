import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Hide and Seek Game</title>
        <meta name='description' content='Hide and Seek game' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <h1>Hide and Seek</h1>
      </header>
      <main>{children}</main>;
    </div>
  );
};

export default Layout;
