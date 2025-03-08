import React, { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = async (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status == 204) alert("Note Deleted!");
        else alert("Failed to delete note");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const addNote = async (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status == 201) alert("Note Added!");
        else alert("Failed to add note");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8 pt-10">Notes</h2>

      <h2 className="text-2xl mb-4 text-center">Create a Note</h2>
      <form
        onSubmit={addNote}
        className="bg-gray-800 p-6 rounded-lg shadow-2xl max-w-xl mx-auto flex flex-col"
      >
        <label htmlFor="title" className="font-bold mt-4">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full p-3 my-2 border-2 border-white rounded-md box-border transition-all focus:outline-none focus:ring-1 focus:ring-white"
        />

        <label htmlFor="content" className="font-bold mt-4">
          Content:
        </label>
        <textarea
          name="content"
          id="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 my-2 border-2 border-white rounded-md box-border resize-none transition-all focus:outline-none focus:ring-1 focus:ring-white"
        />

        <input
          type="submit"
          value="Submit"
          className="mx-auto w-[60%] p-3 my-4 bg-gray-700 text-white rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-500 hover:font-bold hover:scale-105"
        />
      </form>

      <div className="notes-list py-8 mx-10">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note bg-gray-800 border-l-4 border-gray-700 p-4 my-4 rounded-lg text-white"
          >
            <Note note={note} onDelete={deleteNote} key={note.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
