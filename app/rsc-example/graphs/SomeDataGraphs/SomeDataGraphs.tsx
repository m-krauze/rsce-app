/*
    app/rsc-example/graphs/SomeDataGraphs/SomeDataGraphs.tsx
 */

import {format} from "date-fns";

import {StatsDisplay} from "./StatsDisplay";
import {GraphServerStats} from "./GraphServerStats";
import {GraphsDisplay} from "./GraphsDisplay";

export function SomeDataGraphs() {
    const now = new Date();
    const today = format(now, "d/M/yyyy");

    return (
        <div style={{flex: 1, display: "flex", flexDirection: "column", maxWidth: "800px"}}>
            Graphs data last update date - {today}
            <GraphsDisplay />
            <StatsDisplay graphServerStats={<GraphServerStats />} />
        </div>
    );
}
