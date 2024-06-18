import { GraphQLClient, gql } from 'graphql-request';
const getContributions = async (
  token: string,
  userName: string,
  startDate: string,
  endDate: string,
) => {
  const endpoint = 'https://api.github.com/graphql';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query ($userName: String!, $startDate: DateTime!, $endDate: DateTime!) {
      user(login: $userName) {
        contributionsCollection(from: $startDate, to: $endDate) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    userName,
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(endDate).toISOString(),
  };

  try {
    const data = await graphQLClient.request(query, variables);
    const weeks = data.user.contributionsCollection.contributionCalendar.weeks;
    console.log(weeks);
    const contributions = [];
    for (const week of weeks) {
      for (const day of week.contributionDays) {
        contributions.push({ day: day.date, contribution: day.contributionCount });
      }
    }
    return contributions;
  } catch (error) {
    console.error('Error:', error);
    return 'Error';
  }
};

export default getContributions;
