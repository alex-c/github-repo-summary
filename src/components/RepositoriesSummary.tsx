import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import {
    Card,
    Elevation
} from "@blueprintjs/core";
import { Repository } from '../models/Repository';

function RepositoriesSummary(props: any) {
    let repositories:Repository[] = props.repositories;
    console.log(repositories);
    const colors = [
        {title: 'Dart'},
        {title: 'C#'},
        {title: 'Java'},
        {title: 'JavaScript'},
    ]
    return (
        <div>
            {repositories.length > 0 ?
                <Card id="repositories-summary" elevation={Elevation.TWO}>
                    Repositories: {repositories.length}
                    <RadialChart
                        data={[{angle: 1, label: 'JavaScript'},{angle:2, label:'Java'}, {angle: 3, label: 'C#'}, {angle: 5, label: "Dart"}]}
                        showLabels={true}
                        colorDomain={[0, 1, 2]}
                        width={300}
                        height={300} />
                    <DiscreteColorLegend orientation="horizontal" width={300} items={colors} />
                </Card>
            : <span></span>}
        </div>
    );
}

export default RepositoriesSummary;