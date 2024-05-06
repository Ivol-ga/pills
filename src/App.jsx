import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header/Header.jsx";
import { Main } from "./components/layout/Main/Main.jsx";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
