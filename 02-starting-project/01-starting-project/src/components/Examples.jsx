import React, { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx'; // Assuming you have the Tabs component in the same directory.

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  const tabs = [
    { id: 'components', label: 'Components' },
    { id: 'jsx', label: 'JSX' },
    { id: 'props', label: 'Props' },
    { id: 'state', label: 'State' },
  ];

  const tabContent = selectedTopic ? (
    EXAMPLES[selectedTopic] ? (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) : (
      <p>Topic not found.</p>
    )
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <div>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  isSelected={selectedTopic === tab.id}
                  onClick={() => handleSelect(tab.id)}
                >
                  {tab.label}
                </TabButton>
              ))}
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </div>
  );
}

export default Examples;
