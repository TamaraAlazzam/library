import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import BookDetails from "./pages/bookDetails/bookDetails";

function App() {
  return (
    <Routes>
      <Route path="books" element={<Dashboard />} />
      <Route path="books/:id" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
