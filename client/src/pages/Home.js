import React, { useState, useEffect } from "react";
import Landing from "../components/Landing";
import Library from "../components/Library";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import api from "../axios";

function Home() {
  const [contestBook, setContestBook] = useState(null);
  const [libraryBook, setLibraryBook] = useState(null);
  const [otherBook, setOtherBook] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const contest = await api.get("/category/contest");
      setContestBook((prev) => contest.data);
      const library = await api.get("category/fptBook");
      setLibraryBook((prev) => library.data);
      const other = await api.get("/category/other");
      setOtherBook((prev) => other.data);
    };
    console.log(contestBook);
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Landing />
      <Library
        type="Open Your Book, Open Your Mind"
        data={contestBook}
      />
      
      <Library type="Sách thuộc thư viện FPT" data={libraryBook} />
      <Library type="Sách hay nên đọc" data={otherBook} />
      <Footer />
    </div>
  );
}

export default Home;
