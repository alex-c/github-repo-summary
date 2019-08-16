import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import { Card, Elevation, NonIdealState } from '@blueprintjs/core';
import { Repository } from '../models/Repository';
import { IconNames } from '@blueprintjs/icons';

function RepositoriesSummary(props: any) {
  let repositories: Repository[] = props.repositories;
  console.log(repositories);
  const colors = [{ title: 'Dart' }, { title: 'C#' }, { title: 'Java' }, { title: 'JavaScript' }];
  return (
    <div>
      {repositories.length > 0 ? (
        <Card id="repositories-summary" elevation={Elevation.TWO}>
          Repositories: {repositories.length}
          <RadialChart
            data={[
              { angle: 1, label: 'JavaScript' },
              { angle: 2, label: 'Java' },
              { angle: 3, label: 'C#' },
              { angle: 5, label: 'Dart' },
            ]}
            showLabels={true}
            colorDomain={[0, 1, 2]}
            width={300}
            height={300}
          />
          <DiscreteColorLegend orientation="horizontal" width={900} items={colors} />
        </Card>
      ) : (
        <NonIdealState
          icon={IconNames.DISABLE}
          title="No repositories."
          description="The user has no public repositories."
        />
      )}
    </div>
  );
}

export default RepositoriesSummary;
