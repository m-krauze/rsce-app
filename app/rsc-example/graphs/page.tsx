import styles from "../../../styles/Home.module.css";
import {SomeDataGraphs} from "./SomeDataGraphs/SomeDataGraphs";

export default function Page() {
    return <div>
        <h1 className={styles.title}>
          React Server Components (RSC) example - graphs
        </h1>
        <div style={{display: "flex", justifyContent: "center", padding: "3rem 0 3rem 0"}}>
            <SomeDataGraphs />
        </div>
    </div>
}
