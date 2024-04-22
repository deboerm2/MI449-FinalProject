

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

   const output = monsterList.results.map( monster => 

    <li
    key={monsterList.results.index}
   
    className="menu-item">
        <button onClick={ () => {GetMonsterInfo(monster.index)}}>
            {monster.name}
        </button>
    </li>
  );
  return(output)
}
export function ListSpells(){
  const output = spellList.results.map( spell => 
    <li
    key={spell.index}
    
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
}

export function DisplayMonsterInfo(){
 

  const output = ShownMonster
  if(output == null)
    return null
  else
    {monsterResistance = output.damage_resistances
      monsterImmunities = output.damage_immunities
      monsterWeaknesses = output.damage_vulnerabilities
      return (
  <ul>
    <li>Name: {output.name}</li>
    <li>Alignment: {output.alignment}</li>
    <li>Hit Points: {output.hit_points}</li>
    <li>Resistances: {output.damage_resistances}</li>
    <li>Immunities: {output.damage_immunities}</li>
    <li>Weaknesses: {output.damage_vulnerabilities}</li>
    <li>Type: {output.type}</li>
  </ul>)}
  
}
export function DisplaySpellInfo(){
  const output = ShownSpell
  var damageType
  var damageNumbersMin
  var damageNumbersMax
  
  if(output == null)
    return null
  else
  {damageType = output.damage == null ? "none" : output.damage.damage_type.name
  if(damageType !== "none")
   {
    if(output.damage.damage_at_slot_level !== undefined)
    { 
      damageNumbersMin = output.damage.damage_at_slot_level[output.level]
      damageNumbersMax = output.damage.damage_at_slot_level[9]
      
    }
    else{
      damageNumbersMin = output.damage.damage_at_character_level[1]
      damageNumbersMax = output.damage.damage_at_character_level["17"]
    }
   }
   else{
    damageNumbersMin = "none"
    damageNumbersMax = "none"
   }
   
    return (
  <ul>
    <li>Name: {output.name}</li>
    <li>Damage Type: {damageType}</li>
    <li>DamageMinimum: {damageNumbersMin}</li>
    <li>DamageMaximum: {damageNumbersMax}</li>
  </ul>)}
}



var monsterResistance
var monsterImmunities
var monsterWeaknesses

export function Compare(){
  if (ShownSpell === undefined || ShownMonster === undefined)
    return <p></p>
  else 
  {
    var output = "Spell does normal damage"
    if(ShownSpell.damage === undefined)
    {
      output = "Spell does no damage"
      return <p>{output}</p>
    }

    if(monsterResistance.includes(ShownSpell.damage.damage_type.name.toLowerCase()) )
    output = `${ShownMonster.name} resists ${ShownSpell.damage.damage_type.name}`
    if(monsterImmunities.includes(ShownSpell.damage.damage_type.name.toLowerCase()))
    output = `${ShownMonster.name} is immune to ${ShownSpell.damage.damage_type.name}`
    if(monsterWeaknesses.includes(ShownSpell.damage.damage_type.name.toLowerCase()))
    output = `${ShownMonster.name} is weak to ${ShownSpell.damage.damage_type.name}`
    
    return <p>{output}</p>
}
}




