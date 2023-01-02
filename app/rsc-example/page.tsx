import styles from "../../styles/Home.module.css";
import {SomeDataGraphs} from ".//SomeDataGraphs/SomeDataGraphs";
import Link from "next/link";

export default function RscExample() {
    return <div>
        <h1 className={styles.title}>
          React Server Components (RSC) example
        </h1>
        <div style={{display: "flex", justifyContent: "center", padding: "3rem 0 3rem 0"}}>
            Select a page to navigate to
            <nav>
                <ul>
                    <li>
                        <Link href="/rsc-example/graphs">Graphs</Link>
                    </li>
                    <li>
                        <Link href="/rsc-example/credits">Credits</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
}
