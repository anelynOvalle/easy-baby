import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
