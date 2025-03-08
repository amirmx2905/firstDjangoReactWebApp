import React from "react";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleString("en-US");

    return (
      <div className="p-4 m-5 border-2 border-gray-300 rounded-lg">
        <h3 className="font-bold my-4">{note.title}</h3>
        <p className="my-2">{note.content}</p>
        <p className="text-sm my-2">{formattedDate}</p>
        <button 
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500 hover:scale-105 transition-all cursor-pointer my-2"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    );
}

export default Note;
