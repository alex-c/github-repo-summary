import { Repository } from '../../models/Repository';

const roundStarsStat = (stars: number) => Math.round(stars * 10) / 10;

const calculateMeanStars = (stars: number, repoCount: number) => roundStarsStat(stars / repoCount);

const calculateMedianStars = (repositories: Repository[]) => {
  const sortedRepos = repositories.slice().sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
  const repoMedian = sortedRepos.length === 1 ? 0 : sortedRepos.length / 2;
  if (sortedRepos.length % 2 === 1) {
    return roundStarsStat(
      (sortedRepos[Math.floor(repoMedian)].stargazers_count + sortedRepos[Math.ceil(repoMedian)].stargazers_count) / 2,
    );
  } else {
    return sortedRepos[repoMedian].stargazers_count;
  }
};

export { calculateMeanStars, calculateMedianStars };
