import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { createContext } from 'react';
import { useState } from 'react';

export const Inputs = createContext<{
  inputs: {
    startDay: string;
    endDay: string;
    userName: string;
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      startDay: string;
      endDay: string;
      userName: string;
    }>
  >;
}>({
  inputs: {
    startDay: '',
    endDay: '',
    userName: '',
  },
  setInputs: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [inputs, setInputs] = useState({
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
