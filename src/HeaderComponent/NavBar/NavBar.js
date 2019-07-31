import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'material-ui/svg-icons/action/home';
import EyeIcon from 'material-ui/svg-icons/action/visibility';
import HistoryIcon from 'material-ui/svg-icons/action/history';
import ScheduleIcon from 'material-ui/svg-icons/action/watch-later';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
// import { updateCurrentTab } from './actions/index';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currTab: 0 };
  }

  componentDidMount = () => {
    this.setCurrTab();
  };

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setCurrTab();
      this.props.tabClick(this.state.currTab);
    }
  };

  changeTab = tabID => {
    this.props.tabClick(tabID);
    this.setState({
      currTab: tabID
    });
  };

  setCurrTab = () => {
    switch (this.props.path) {
      case '/dashboard/scanners':
        this.setState({
          currTab: 1
        });
        break;
      case '/dashboard/history':
        this.setState({
          currTab: 2
        });
        break;
      case '/dashboard/settings':
        this.setState({
          currTab: 4
        });
        break;
      default:
        this.setState({
          currTab: 0
        });
        break;
    }
  };

  render() {
    const style = {
      label: {
        fontFamily: 'Helvetica'
      },
      icon: {
        color: 'white',
        marginTop: '10px'
      }
    };
    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
          <Link to="/dashboard" className="logo" onClick={e => this.changeTab(0)}>
            <img src="/alexlogo.png" />
          </Link>
          <Link
            to="/dashboard"
            onClick={e => this.changeTab(0)}
            className={this.state.currTab === 0 ? 'menu-button selected' : 'menu-button'}
          >
            <HomeIcon style={style.icon} />
            <div style={style.label}>HOME</div>
          </Link>
          <Link
            to="/dashboard/scanners"
            onClick={e => this.changeTab(1)}
            className={this.state.currTab === 1 ? 'menu-button selected' : 'menu-button'}
          >
            <EyeIcon style={style.icon} />
            <div style={style.label}>SCANNERS</div>
          </Link>

          <Link
            to="/dashboard/history"
            onClick={e => this.changeTab(2)}
            className={this.state.currTab === 2 ? 'menu-button selected' : 'menu-button'}
          >
            <HistoryIcon style={style.icon} />
            <div style={style.label}>HISTORY</div>
          </Link>

          <Link
            to="/dashboard/settings/profile"
            onClick={e => this.changeTab(4)}
            className={this.state.currTab === 4 ? 'menu-button right selected' : 'menu-button right'}
          >
            <SettingsIcon style={style.icon} />
            <div style={style.label}>SETTINGS</div>
          </Link>
        </div>
      </div>
    );
  }
}
