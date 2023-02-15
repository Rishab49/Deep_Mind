import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound";
import ResultPage from "./Pages/ResultPage";
import RoutinePage from "./Pages/RoutinePage";
import SearchPage from "./Pages/SearchPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<SearchPage />}></Route>
          <Route path="/routine" element={<ResultPage />}></Route>
          <Route path="/routine/:routineName" element={<RoutinePage />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
