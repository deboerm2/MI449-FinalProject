
import './App.css';
import { ListMonsters, ListSpells, DisplayMonsterInfo, DisplaySpellInfo, Compare } from './List'
import * as React from 'react';



function App() {
  
  const [openMon, setOpenMon] = React.useState(false);
  const [openSpell, setOpenSpell] = React.useState(false);
  


  const handleOpenMon = () => {
    setOpenMon(!openMon);
    setOpenSpell(false);
  }
  const handleOpenSpell = () => {
    setOpenSpell(!openSpell);
    setOpenMon(false);
  }


  return (
    <div className="App max-w-screen-lg">
     
     <div className='Results flex flex-row'>
     <DisplayMonsterInfo/> 
     <Compare/>
     <DisplaySpellInfo/>
     
     </div>
     
     <div className='grid grid-cols-2'>
      <button onClick={handleOpenMon} className="Dropdown grow">Monsters</button>
      {openMon ? (
        <ul className="menu Monsters">
          <ListMonsters/>
        </ul>
      ) : <ul className='Monsters'></ul>}
      

      <button onClick={handleOpenSpell} className='Dropdown grow'>Spells</button>
      {openSpell ? (
        <ul className="menu Spells">
          <ListSpells/>
        </ul>
      ) : null}
      </div>
    </div>
  );
}

export default App;
