import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data"; // Javascript must be imported by  {  }
import TabButton from "./components/TabButton";
import { useState } from "react";

// Here we might see an anamoly that when the buttons are selected the descritpion in the Header is also changed because

function App() {
  let [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    // selected button should be string i.e either 4 of them
    // "components", "jsx", "props", "state"\

    // setSelectedTopic(()=>{return selectedTopic = selectedButton})
    // either the above code or
    setSelectedTopic(selectedButton);
  }

  
  let tabContent = <p>Please click a button</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>{
                return <CoreConcepts key={conceptItem.title} {...conceptItem}/>
            })}
          </ul>


          {/* <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul> */}
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == "components"} onSelect={() => handleSelect("components")}> Components </TabButton>
            <TabButton isSelected={selectedTopic == "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic == "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {/* We could have done both in the same ternary operator but we will have to use the useState to update otherwise it won't be updated. */}

          {/* {!selectedTopic ? <p> Please select a topic </p> : null}

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}

          {/*Either we can do this on the top or the if statement approach */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
