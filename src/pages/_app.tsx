import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { createContext } from 'react';
import { useState } from 'react';

export const Inputs = createContext<{
  inputs: {
    token: string;
    startDay: string;
    endDay: string;
    userName: string;
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      token: string;
      startDay: string;
      endDay: string;
      userName: string;
    }>
  >;
}>({
  inputs: {
    token: '',
    startDay: '',
    endDay: '',
    userName: '',
  },
  setInputs: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [inputs, setInputs] = useState({
    token: '',
    startDay: '',
    endDay: '',
    userName: '',
  });
  const value = { inputs, setInputs };
  return (
    <Inputs.Provider value={value}>
      <Component {...pageProps} />
    </Inputs.Provider>
  );
}
export default MyApp;
