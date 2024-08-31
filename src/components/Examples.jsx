import { useState } from 'react';
import TabButton from './TabButton.jsx';

import { EXAMPLES } from '../data.js';

export default function Examples() {
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedText==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedText==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedText==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedText==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
    );
}