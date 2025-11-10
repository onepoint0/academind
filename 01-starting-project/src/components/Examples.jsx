import { useState } from "react";
import { CORE_CONCEPTS } from "../data";

export default function Examples() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleButtonClick = (id) => {
    setCurrentTab(id);
  }

  return (
    <section id='examples'>

      <h2>Examples</h2>

      <menu>
        {CORE_CONCEPTS.map(c => <button className={c.id === currentTab ? 'active' : ''} onClick={() => handleButtonClick(c.id)} key={c.id}>{c.title}</button>)}
      </menu>

      <div id="tab-content">
        <h3>{CORE_CONCEPTS[currentTab].title}</h3>
        <p>{CORE_CONCEPTS[currentTab].exampleDescription}</p>
        <pre>{CORE_CONCEPTS[currentTab].code}</pre>
      </div>

    </section>
  )
}
