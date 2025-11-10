import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <>
            <h2>Core Concepts</h2>
            <section id='core-concepts'>
                <ul>
                    {CORE_CONCEPTS.map(c => <CoreConcept key={c.id} {...c} />)}
                </ul>
            </section>
        </>
    )
}

