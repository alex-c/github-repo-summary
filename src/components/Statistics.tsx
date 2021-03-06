import React from 'react';
import { Card, Elevation, Callout, Intent } from '@blueprintjs/core';
import ReactApexChart from 'react-apexcharts';
import { LanguageStatistics } from '../models/LanguageStatistics';
import { StarsStatistics } from '../models/StarsStatistics';
import { IconNames } from '@blueprintjs/icons';

interface StatisticsProps {
  languageStatistics: LanguageStatistics;
  starsStatistics: StarsStatistics;
}

function Statistics(props: StatisticsProps) {
  let { languageStatistics, starsStatistics } = props;
  return (
    <Card id="repositories-summary" elevation={Elevation.TWO}>
      <div className="flex-card-section">
        <div>
          <Callout intent={Intent.PRIMARY} icon={IconNames.CODE}>
            {languageStatistics.language_count} languages used over {languageStatistics.repository_count} repositories.
          </Callout>
          <ReactApexChart
            type="pie"
            width="500"
            options={{
              labels: languageStatistics.languages.map(language => language.name),
              plotOptions: {
                pie: {
                  expandOnClick: false,
                },
              },
              responsive: [
                {
                  breakpoint: 500,
                  options: {
                    chart: {
                      width: 400,
                    },
                    legend: {
                      position: 'bottom',
                    },
                  },
                },
                {
                  breakpoint: 400,
                  options: {
                    chart: {
                      width: 300,
                    },
                    legend: {
                      position: 'bottom',
                    },
                  },
                },
              ],
            }}
            series={languageStatistics.languages.map(language => language.count)}
          />
        </div>
        <div>
          <Callout intent={Intent.PRIMARY} icon={IconNames.STAR}>
            {starsStatistics.total_stars} stars over {languageStatistics.repository_count} repositories.
          </Callout>
          <div className="padded-content">
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
      </div>
    </Card>
  );
}

export default Statistics;
