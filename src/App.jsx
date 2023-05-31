import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import data from './data';

const App = () => {
  console.log(faker.lorem.word(20));
  const [selected, setSelected] = useState('paragraph');

  const [content, setContent] = useState(faker.lorem.paragraph(5));

  const loremFunctions = {
    word: ['Generates a single random word. (Max. Length 8)', faker.lorem.word],
    words: ['Generates a string of random words separated by spaces. (Takes no. of words in the sentence)', faker.lorem.words],
    sentence: ['Generates a random sentence. (Takes no. of words in a sentence', faker.lorem.sentence],
    slug: ['Generates a random slug (lowercase text separated by hyphens). (Takes no. of words required for the slug)', faker.lorem.slug],
    sentences: ['Generates an array of random sentences. (Takes no. of sentences)', faker.lorem.sentences],
    paragraph: ['Generates a random paragraph. (Takes no. of sentences in paragraph)', faker.lorem.paragraph],
    paragraphs: ['Generates an array of random paragraphs.', faker.lorem.paragraphs],
    text: ['Generates a random text block.', faker.lorem.text],
    lines: ['Generates an array of random lines of text.', faker.lorem.lines],
  };

  const clickHandler = (e) => {
    if (document.getElementById('generator').value === '') {
      setSelected(() => 'paragraph');
      setContent(() => faker.lorem.paragraph(5));
      alert('Enter Valid Input');

      return;
    }

    // console.log(loremFunctions[selected][1](Number(document.getElementById('generator').value)));
    return setContent(loremFunctions[selected][1](Number(document.getElementById('generator').value)));
  }

  const hoverStyles = {
    backgroundColor: '#10b981',
    color: "white",
    transition: 'all .5s ease-in-out',
  }


  return <>
    <section className="section title" style={{ marginBlock: '1rem' }}>
      <h2>Lorem FakeSum</h2>
    </section >

    <section className="section content">
      <div className="content__container">

        {/* Content Description of the selected mode */}
        <div className="content__description" style={{ display: 'grid', alignItems: 'center', gap: '2rem', gridTemplateColumns: '1fr 4fr', margin: '2rem' }}>

          <select value={selected} onChange={(e) => { setSelected(() => e.target.value) }} style={{ padding: '.5rem', textAlign: 'center', backgroundColor: 'white', border: '2px solid #10b981', borderRadius: '.5rem', cursor: 'pointer', transition: 'all .5s ease-in-out', }}>
            {
              Object.keys(loremFunctions).map((item, index) => {
                return <option key={index} value={item} > {item}</option>;
              })
            }
          </select>
          <p>{loremFunctions[selected][0]}</p>
        </div>

        {/* Asking for Prompt from User */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBlock: '2rem' }}>
          <label htmlFor="generator">Number of {selected}</label>
          <input type="number" name="generator" id="generator" min={0} style={{ padding: '.4rem', borderRadius: '.5rem', borderColor: '#10b981' }} />
          <button className="btn btn--primary" onClick={clickHandler}>Generate</button>
        </div>

        {/* Displaying the output */}
        <div className='content__area' style={{ margin: '2rem', padding: '2rem', border: '2px solid black', borderRadius: '.5rem', lineHeight: '1.5' }}>
          {(content)}
          <div></div>
        </div>

      </div>
    </section >


    <div style={{ position: "absolute", bottom: 0, width: '100%', height: '12%', backgroundColor: 'black', color: 'white', display: 'grid', placeItems: 'center', padding: '1rem' }}>
      <div className=''>
        Made with <BsFillSuitHeartFill style={{ color: 'red' }} /> By Naineel Soyantar
      </div>
    </div>
  </>;
};
export default App;
