import Head from "next/head";

import SearchInput from "../components/SearchInput";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Hits from "../components/Hits";
import Loading from "../components/Loading";
import PagesCmd from "../components/PagesCmd";

import { fetchStories } from "../store/actions/storiesActions";
import { useEffect } from "react";

const Index = () => {
  const dispatch = useDispatch();
  const { error, loading, query, page } = useSelector((state) => state.stories);

  useEffect(() => {
    dispatch(fetchStories(query, page));
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News Search</title>
        <meta name="description" content="Quiz app by next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title-div">
        <h1>Hacker News</h1>
        <a
          href="https://hn.algolia.com/api/"
          target="_blank"
          rel="noreferrer"
          title="Powered by Hacker News"
        >
          <img
            style={{ width: "40px", objectFit: "cover" }}
            src="HN.png"
            alt="Hacker News logo"
          />
        </a>
      </div>
      <div className="global-div">
        <SearchInput className="search-input" />
        <p className="error-container">{error && "Something went wrong..."}</p>
        <PagesCmd />
        {!loading ? <Hits /> : <Loading />}
      </div>{" "}
      <Footer />
    </>
  );
};

export default Index;
