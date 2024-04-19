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
  export const monsterList = await response.json();
  const response2 = await fetch(
    "https://www.dnd5eapi.co/api/spells", requestOptions
  );
  export const spellList = await response2.json();

export function ListMonsters(){
   const output = monsterList.results.map( monster => 

    <li
    key={monsterList.results.index}
    style={{
      color: 'red'
    }}
    className="menu-item">
        <button>{monster.name}</button>
    </li>
  );
  return(
    output
  )
}


export function ListSpells(){
  const output = spellList.results.map( spell => 
    <li
    key={spell.index}
    style={{
        color: 'blue'
    }}
    >
    {spell.name}
    </li> 
    
 
);
 return(
   output
 )
}