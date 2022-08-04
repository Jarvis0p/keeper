import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isBoxClicked, setBox] = useState(false);

  function handBox() {
    setBox(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isBoxClicked &&
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />}
        <textarea
          onClick={handBox}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isBoxClicked?"3":"1"}
        />

        {isBoxClicked &&
          <Zoom in={isBoxClicked  }>
            <Fab color="primary" aria-label="add"
              onClick={submitNote}>
              <AddCircleIcon />
            </Fab>
          </Zoom>
        }
      </form>
    </div>
  );
}

export default CreateArea;
