import React, { useContext, useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './result.module.css';
import { Inputs } from './_app';
import getContributions from '../functions/getContributions';

type Result = {
  day: string;
  contribution: number;
};

const Home = () => {
  const { inputs } = useContext(Inputs);
  const [contributions, setContributions] = useState<Result[] | null>(null);
  const [activeDaysCount, setActiveDaysCount] = useState<number | null>(null);
  const [totoalContributions, setTotalContributions] = useState<number | null>(null);

  useEffect(() => {
    if (inputs.token && inputs.userName && inputs.startDay && inputs.endDay) {
      const fetchContributions = async () => {
        const result = await getContributions(
          inputs.token,
          inputs.userName,
          inputs.startDay,
          inputs.endDay,
        );
        if (result !== 'Error') {
          setContributions(result);
          const totalContributions = result.reduce((acc, day) => acc + day.contribution, 0);
          setTotalContributions(totalContributions);
          const activeDays = result.filter((day) => day.contribution > 0).length;
          setActiveDaysCount(activeDays);
        } else {
          setContributions(null);
          setActiveDaysCount(null);
        }
      };

      fetchContributions();
    }
  }, [inputs]);

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        {inputs.userName && (
          <div className={styles.info}>
            <p>
              <strong>User:</strong> {inputs.userName}
            </p>
            <p>
              <strong>From:</strong> {inputs.startDay}
            </p>
            <p>
              <strong>To:</strong> {inputs.endDay}
            </p>
            <p>
              <strong>Total:</strong> {totoalContributions}
            </p>
            <p>
              <strong>Grass:</strong> {activeDaysCount}
            </p>
          </div>
        )}
        {contributions ? (
          <>
            <ResponsiveContainer width="100%" height={400} className={styles.chart}>
              <LineChart
                data={contributions}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="contribution"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </>
        ) : (
          <div className={styles.loading}>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
