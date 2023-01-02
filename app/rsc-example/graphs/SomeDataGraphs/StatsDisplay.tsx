'use client'
/*
    app/rsc-example/graphs/SomeDataGraphs/StatsDisplay.tsx
 */

import {ReactNode, useState} from "react";

interface StatsDisplayProps {
    graphServerStats: ReactNode;
}

export function StatsDisplay(props: StatsDisplayProps) {
    const {graphServerStats} = props;
    const [statsVisible, setStatsVisible] = useState(false);

    const toggleStats = () => {
        setStatsVisible(!statsVisible);
    };

    return <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex",}}>
            <h2 style={{flex: "1 0 auto"}}>Stats</h2>
            <button type="button" onClick={toggleStats}>Toggle stats</button>
        </div>

        {statsVisible && graphServerStats}
    </div>
}
