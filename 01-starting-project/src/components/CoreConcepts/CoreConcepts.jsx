import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";
import Section from "../UI/Section";

export default function CoreConcepts() {
    return (
        <Section id='core-concepts' title='Core Concepts'>
            <ul>
                {CORE_CONCEPTS.map(c => <CoreConcept key={c.id} {...c} />)}
            </ul>
        </Section>
    )
}

