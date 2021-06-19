import React, { useState } from "react";
import { connect } from "react-redux";
import { addHouse } from "../actions/index";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
 
export const Addbooks = (props) => {
  
 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [newHouse, setNewHouse] = useState("");
  const [newName, setNewName] = useState("");
  const [newNote, setNewNote] = useState("");
  const addNewHouse = (e) => {
    e.preventDefault();
    props.addHouse({
      id: Math.random(),
      house: newHouse,
      name: newName,
      note: newNote,
    });
    setNewHouse("");
    setNewName("");
    setNewNote("");
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add contact
    
      </button>
      
      <Fade in={open}>
          <form onSubmit={addNewHouse}>
            <div >
              <h2 id="transition-modal-title">Add a house:</h2>
              <p>Houses</p>
              <input
                onChange={(e) => setNewHouse(e.target.value)}
                id="standard-basic"
                label="House"
                value={newHouse}
              />
              <Divider light />
              <p>Name</p>
              <input
                onChange={(e) => setNewName(e.target.value)}
                id="standard-basic"
                label="Name"
                value={newName}
              />
              <Divider light />
              <p>Notes</p>
              <input
                onChange={(e) => setNewNote(e.target.value)}
                id="standard-basic"
                label="Notes"
                value={newNote}
              />
            </div>
            <button onClick={handleClose}> submit</button>
          </form>
        </Fade>
          </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addHouse: (house) => dispatch(addHouse(house)),
  };
};
export default connect(null, mapDispatchToProps)(Addbooks);
