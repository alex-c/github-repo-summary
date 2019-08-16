import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import { Card, Elevation } from '@blueprintjs/core';
import { LanguageStatistics } from '../models/LanguageStatistics';

function RepositoriesSummary(props: any) {
  let languageStatistics: LanguageStatistics = props.languageStatistics;
  return (
    <Card id="repositories-summary" elevation={Elevation.TWO}>
      <RadialChart
        data={languageStatistics.languages
          .map(language => {
            return { angle: language.count, label: language.name };
          })
          .reverse()}
        showLabels={true}
        colorDomain={[0, 1, 2]}
        width={300}
        height={300}
      />
      <DiscreteColorLegend
        orientation="horizontal"
        items={languageStatistics.languages.map(language => {
          return { title: `${language.name}: ${language.count}` };
        })}
      />
    </Card>
  );
}

export default RepositoriesSummary;
