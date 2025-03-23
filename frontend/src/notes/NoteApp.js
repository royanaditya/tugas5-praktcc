import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import NoteEdit from "./NoteEdit";

const NoteApp = () => {
  return (
    <Router>
      <div className="section">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<NoteForm />} />
          <Route path="/edit/:id" element={<NoteEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NoteApp;
