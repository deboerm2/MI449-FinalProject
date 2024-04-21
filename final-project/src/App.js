
import './App.css';
import { ListMonsters, ListSpells, DisplayMonsterInfo } from './List'
import Form from './Form.js';
import * as React from 'react';



function App() {
  
  const [openMon, setOpenMon] = React.useState(false);
  const [openSpell, setOpenSpell] = React.useState(false);
  const [monsterData, setMonsterData] = React.useState(false);
  const [spellData, setSpellData] = React.useState(false);


  const handleOpenMon = () => {
    setOpenMon(!openMon);
  }
  const handleOpenSpell = () => {
    setOpenSpell(!openSpell);
  }


  return (
    <div className="App">
     
     <DisplayMonsterInfo/> 

      <button onClick={handleOpenMon}>Dropdown</button>
      {openMon ? (
        <ul className="menu">
          <ListMonsters/>
        </ul>
      ) : null}
      {openMon ? <div>Is Open</div> : <div>Is Closed</div>}

      <button onClick={handleOpenSpell}>Dropdown</button>
      {openSpell ? (
        <ul className="menu">
          <ListSpells/>
        </ul>
      ) : null}
      {openSpell ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
}

export default App;
