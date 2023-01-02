import styles from "../../styles/Home.module.css";
import {SomeDataGraphs} from "../rsc-example/graphs/SomeDataGraphs/SomeDataGraphs";

export default function RscExample() {
    return <div>
        <h1 className={styles.title}>
          React Server Components (RSC) example
        </h1>
        <div style={{display: "flex", justifyContent: "center", padding: "3rem 0 3rem 0"}}>
            <SomeDataGraphs />
        </div>
    </div>
}
