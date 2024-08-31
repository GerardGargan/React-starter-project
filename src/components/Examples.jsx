import { useState } from 'react';
import Section from './Section.jsx';
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
        <Section title="Examples" id="examples">
          <menu>
            <TabButton isSelected={selectedText==='components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedText==='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedText==='props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedText==='state'} onClick={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </Section>
    );
}