import React, { useState } from "react";
import axios from "axios";


import MorningRoutine from "./morning-routine/MorningRoutine";
import EveningRoutine from "./evening-routine/EveningRoutine";
import OccassionalRoutine from "./occassional-routine/OccassionalRoutine";
import SkinType from "./SkinType";
import OtherConcerns from "./OtherConcerns";
import Registration from "./registration-form/Registration";
import Profile from "./profile/Profile";


// styles 
import "./App.css"

function App() {

  const [morningRoutines, setMorningRoutines] = useState([]);
  const [eveningRoutines, setEveningRoutines] = useState([]);
  const [occassionalRoutines, setOccassionalRoutines] = useState([]);
  const [skinType, setSkinType] = useState("");
  const [otherConcerns, setOtherConcerns] = useState([]);
  
  function updateMorningRoutine(event) {
    
    const productName = event.target.textContent;

    if(morningRoutines.includes(productName)) {
      const temp = morningRoutines.filter(routine => routine !== productName);
      setMorningRoutines(temp);
    } else {
      setMorningRoutines(currentValue => [...currentValue, productName]);
    }
  }

  function updateEveningRoutine(event) {
    
    const productName = event.target.textContent;

    if(eveningRoutines.includes(productName)) {
      const temp = eveningRoutines.filter(routine => routine !== productName);
      setEveningRoutines(temp);
    } else {
      setEveningRoutines(currentValue => [...currentValue, productName]);
    }
  }

  function updateOccassionalRoutine(event) {
    
    const productName = event.target.textContent;

    if(occassionalRoutines.includes(productName)) {
      const temp = occassionalRoutines.filter(routine => routine !== productName);
      setOccassionalRoutines(temp);
    } else {
      setOccassionalRoutines(currentValue => [...currentValue, productName]);
    }
  }

  function updateSkinType (e) {

    const type = e.target.textContent;

    if(type === skinType) return setSkinType("");

    setSkinType(type);

  }

  function updateOtherConcerns(event) {
    
    const newConcern = event.target.textContent;

    if(otherConcerns.includes(newConcern)) {
      const temp = otherConcerns.filter(concern => concern !== newConcern);
      setOtherConcerns(temp);
    } else {
      setOtherConcerns(currentValue => [...currentValue, newConcern]);
    }
  }


  return (
    <div className="container">
      
      {/* <MorningRoutine
        morningRoutines = {morningRoutines}
        updateMorningRoutine = {updateMorningRoutine}
      /> */}
      {/* <EveningRoutine
        eveningRoutines = {eveningRoutines}
        updateEveningRoutine = {updateEveningRoutine}
      /> */}
      {/* <OccassionalRoutine
        occassionalRoutines = {occassionalRoutines}
        updateOccassionalRoutine = {updateOccassionalRoutine}
      /> */}
      {/* <SkinType 
        skinType = {skinType}
        updateSkinType = {updateSkinType}
      /> */}
      <OtherConcerns
        otherConcerns = {otherConcerns}
        updateOtherConcerns = {updateOtherConcerns} 
      />
      {/* <Registration /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
