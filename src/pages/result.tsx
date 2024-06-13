import React, { useContext, useState, useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import styles from './index.module.css';
import { Inputs } from './_app';

const getContributions = async (userName: string, startDate: string, endDate: string) => {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  console.log(token);
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
          totalCommitContributions
          restrictedContributionsCount
          commitContributionsByRepository {
            contributions {
              totalCount
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
    const totalContributions =
      data.user.contributionsCollection.totalCommitContributions +
      data.user.contributionsCollection.restrictedContributionsCount;

    return totalContributions;
  } catch (error) {
    console.error('Error:', error);
    return 'Error';
  }
};

const Home = () => {
  const { inputs } = useContext(Inputs);
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      const result = await getContributions(inputs.userName, inputs.startDay, inputs.endDay);
      setContributions(result);
    };

    fetchContributions();
  }, [inputs]);

  return (
    <div className={styles.container}>
      <div>{contributions !== null ? `Total Contributions: ${contributions}` : 'Loading...'}</div>
    </div>
  );
};

export default Home;
