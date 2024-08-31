import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import { EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedText, setSelectedText ] = useState('');

  function handleSelect(selectedButton) {
    setSelectedText(selectedButton);
  }

  let tabContent = <p>Please select a tab</p>;

  if(selectedText) {
    tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedText].title}</h3>
          <p>{EXAMPLES[selectedText].description}</p>
          <code>
            {EXAMPLES[selectedText].code}
          </code>
        </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map(x => {
              return <CoreConcept {...x} />
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedText==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedText==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedText==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedText==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
