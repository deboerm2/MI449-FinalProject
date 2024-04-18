
import './App.css';


const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};


  const response = await fetch(
    "https://www.dnd5eapi.co/api/monsters", requestOptions
  );
  const monsterList = await response.json();
  const response2 = await fetch(
    "https://www.dnd5eapi.co/api/spells", requestOptions
  );
  const spellList = await response2.json();

function ListMonsters(){
   const output = monsterList.results.map( monster => 
    
    <li
    key={monsterList.results.index}
    style={{
      color: 'red'
    }}
    >
      {monster.name}
    </li>
  );
  return(
    output
  )
}


function ListSpells(){
  const output = spellList.results.map( spell => 
    <li
    key={spell.index}
    >
    {spell.name}
    </li> 
    
 
);
 return(
   output
 )
}


function App() {
  return (
    <div className="App">
      <header className="App-Header">

     <ListMonsters/>
     <ListSpells/>
        
      </header>
    </div>
  );
}

export default App;
