import Head from "next/head";
import Select from "react-select";

import withGoogleMaps from "../components/withGoogleMaps";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="w-full">
          <Select />
        </div>
      </main>
    </div>
  );
}

export default withGoogleMaps({
  preventGoogleFontsLoading: true,
})(Home);
