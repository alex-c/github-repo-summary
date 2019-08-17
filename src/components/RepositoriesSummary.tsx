import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import { Card, Elevation, Callout, Intent } from '@blueprintjs/core';
import { LanguageStatistics } from '../models/LanguageStatistics';
import { IconNames } from '@blueprintjs/icons';

interface RepositoriesSummaryProps {
  languageStatistics: LanguageStatistics;
}

function RepositoriesSummary(props: RepositoriesSummaryProps) {
  let { languageStatistics } = props;
  return (
    <Card id="repositories-summary" elevation={Elevation.TWO}>
      <Callout intent={Intent.PRIMARY} icon={IconNames.PIE_CHART}>
        {languageStatistics.language_count} languages used over {languageStatistics.repository_count} repositories.
      </Callout>
      <div className="flex-card-section">
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
          width={300}
        />
      </div>
    </Card>
  );
}

export default RepositoriesSummary;
