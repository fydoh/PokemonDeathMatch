import React from 'react';
import ThemeProvider, { createGlobalStyle } from '@carvana/theme';
import { ExperimentProvider } from '@carvana/experiment';
import Layout from './components/Layout';
import Pokemon from './components/Pokemon';

const GlobalStyle = createGlobalStyle(process.env.NODE_ENV);
const defaults = {
  apiTimeout: 2000,
  cacheMinutes: 15,
  identifier: 'user-identifier',
  environment: 'development'
};

const App = (
  <ThemeProvider>
    <ExperimentProvider defaults={defaults}>
      <>
        <GlobalStyle />
        <Layout>
          <Pokemon />
        </Layout>
      </>
    </ExperimentProvider>
  </ThemeProvider>
);

export default App;
