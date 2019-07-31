import React, {Component } from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import styles from './css/styles.css';

import DashboardContent from './DashboardContent/DashboardContent';
import NavBar from './HeaderComponent/NavBar/NavBar';

// import {..., ...} from './components/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
          <Route name="home" exact path="/" 
            component={DashboardContent} />
        {/* <NavBar path={location.pathname} /> */}
        {/* {currentTab === 4 ? <Sidebar /> : null}
        <Route
          exact
          path={`${match.url}`}
          render={props => {
            if (access.pages.dashboard) {
              return <DashboardContent {...props} />;
            }
            return <div style={restrictedPageStyle}>This page is restricted</div>;
          }}
        />

        <Route
          exact
          path={`${match.url}/scanners`}
          render={props => {
            if (access.pages.scanners) {
              return <Inventory {...props} />;
            }
            return <div style={restrictedPageStyle}>This page is restricted</div>;
          }}
        />

        <Route
          exact
          path={`${match.url}/scanners/configure`}
          render={props => {
            if (access.pages.configure) {
              return <Configurator {...props} />;
            }
            return <Redirect to={lastPath} />;
          }}
        />

        <Route
          path={`${match.url}/scanners/configure/:id`}
          render={props => {
            if (access.pages.configure) {
              return <Configurator {...props} />;
            }
            return <Redirect to={lastPath} />;
          }}
        />

        <Route
          path={`${match.url}/schedule/`}
          render={props => {
            if (access.pages.schedule) {
              console.log('here');
              return <Schedule {...props} />;
            }
            console.log(lastPath);
            console.log(props);
            return <div style={restrictedPageStyle}>This page is restricted</div>;
          }}
        />

        <Route
          path={`${match.url}/settings`}
          render={props => {
            if (access.pages.settings) {
              return <Settings {...props} />;
            }
            return <div style={restrictedPageStyle}>This page is restricted</div>;
          }}
        />

        <Route
          path={`${match.url}/history`}
          render={props => {
            if (access.pages.history) {
              return <History {...props} />;
            }
            return <div style={restrictedPageStyle}>This page is restricted</div>;
          }}
        />

        <Notifier /> */}
      </div>
    );
  }
}

export default App;
