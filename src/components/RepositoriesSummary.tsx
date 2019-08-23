import React from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';
import { Card, Elevation, Callout, Intent } from '@blueprintjs/core';
import { LanguageStatistics } from '../models/LanguageStatistics';
import { IconNames } from '@blueprintjs/icons';
import { StarsStatistics } from '../models/StarsStatistics';

interface RepositoriesSummaryProps {
  languageStatistics: LanguageStatistics;
  starsStatistics: StarsStatistics;
}

function RepositoriesSummary(props: RepositoriesSummaryProps) {
  let { languageStatistics, starsStatistics } = props;
  return (
    <Card id="repositories-summary" elevation={Elevation.TWO}>
      <Callout intent={Intent.PRIMARY} icon={IconNames.PIE_CHART}>
        {languageStatistics.language_count} languages used and {starsStatistics.total_stars} stars over{' '}
        {languageStatistics.repository_count} repositories.
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
          width={150}
        />
        <div>
          <p>
            Max stars:&nbsp;
            <a href={starsStatistics.max_stars_repo.html_url} target="_blank" rel="noopener noreferrer">
              {starsStatistics.max_stars_repo.name}
            </a>
            &nbsp;({starsStatistics.max_stars_repo.stargazers_count})
          </p>
          <p>Average stars: {starsStatistics.average_stars}</p>
          <p>Median stars: {starsStatistics.median_stars}</p>
        </div>
      </div>
    </Card>
  );
}

export default RepositoriesSummary;
