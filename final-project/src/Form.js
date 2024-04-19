import { useState } from 'react';
import { monsterList, spellList } from './List';

let listType;

export default function Form({useList}) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  listType = useList;

  if (status === 'success') {
    return <h1>{answer}</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <p>
        select from the {listType} list
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}





function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        //need to iterate through the list and check if answer is there
      let shouldError = !CheckAnswer(answer);
      if (shouldError) {
        reject(new Error('Input is not an entry in the list.'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function CheckAnswer(answer){
    let validAnswer = false;
    if(listType === "monsters")
    {
        
        monsterList.results.forEach(monster => {
            if(monster.name.toUpperCase() === answer.toUpperCase())
            {
                validAnswer = true;                
            }
        })
        return validAnswer;
    }
    else if(listType === "spells")
    {
        spellList.results.forEach(spell => {
            if(spell.name.toUpperCase() === answer.toUpperCase())
            {
                validAnswer = true;                
            }
        })
        return validAnswer;
    }
}
