import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { COLORS, MENU } from "./constants";
import { Menu } from './components';
import "./styles/main.scss";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Page404 = lazy(() => import('./pages/Page404'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
  },
});

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Root>
        <Side>
          <Menu items={MENU} />
        </Side>
        <Main>
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path='*' component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </Root>
    </ThemeProvider>
  </Router>
);

const Root = props => <div className="root">{props.children}</div>
const Side = props => <div className="side">{props.children}</div>
const Main = props => <div className="main">{props.children}</div>

export default App;