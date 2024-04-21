import * as React from 'react';

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

  var ShownMonster
  var ShownSpell

  const response = await fetch(
    "https://www.dnd5eapi.co/api/monsters", requestOptions
  );
  export const monsterList = await response.json();
  const response2 = await fetch(
    "https://www.dnd5eapi.co/api/spells", requestOptions
  );
  export const spellList = await response2.json();

export function ListMonsters(){

  const [monsterData, setMonsterData] = React.useState(false);

   const output = monsterList.results.map( monster => 

    <li
    key={monsterList.results.index}
    style={{
      color: 'red'
    }}
    className="menu-item">
        <button onClick={ () => {GetMonsterInfo(monster.index); setMonsterData(true)}}>
            {monster.name}
        </button>
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
    className="menu-item">
        <button onClick={ () => {GetSpellInfo(spell.index)}}>
            {spell.name}
        </button>
    </li> 
    
 
);
 return(
   output
 )
}

async function GetMonsterInfo(index){
    var response = await fetch(`https://www.dnd5eapi.co/api/monsters/${index}`, requestOptions)
    ShownMonster = await response.json();             
    
}

async function GetSpellInfo(index){
  var response = await fetch(`https://www.dnd5eapi.co/api/spells/${index}`, requestOptions)
    ShownSpell = await response.json(); 
    console.log(ShownSpell)
}

export function DisplayMonsterInfo(){
 

  const output = ShownMonster
  if(output == null)
    return null
  else
    return (
  <ul>
    <li>Name: {output.name}</li>
    <li>Alignment: {output.alignment}</li>
    <li>Hit Points: {output.hit_points}</li>
    <li>Resistances: {output.damage_resistances}</li>
    <li>Type: {output.type}</li>
  </ul>)
  
  
}

