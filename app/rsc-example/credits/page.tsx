import styles from "../../../styles/Home.module.css";

export default function Page() {
    return <div>
        <h1 className={styles.title}>
          React Server Components (RSC) example - credits
        </h1>
        <div style={{display: "flex", justifyContent: "center", padding: "3rem 0 3rem 0"}}>
            Here are some credits
        </div>
    </div>
}
