import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import Section from "./UI/Section";
import Tabs from "./UI/Tabs";

export default function Examples() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleButtonClick = id => setCurrentTab(id);

  return (
    <Section id='examples' title='Examples'>
      <Tabs buttons={CORE_CONCEPTS.map(c => <button className={c.id === currentTab ? 'active' : ''} onClick={() => handleButtonClick(c.id)} key={c.id}>{c.title}</button>)}>
        <div id="tab-content">
          <h3>{CORE_CONCEPTS[currentTab].title}</h3>
          <p>{CORE_CONCEPTS[currentTab].exampleDescription}</p>
          <pre>{CORE_CONCEPTS[currentTab].code}</pre>
        </div>
      </Tabs>

    </Section>
  )
}
