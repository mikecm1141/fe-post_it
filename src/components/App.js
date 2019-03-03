import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import NavBar from './NavBar';
import Topics from './Topics';

import { doTopicsFetch } from '../actions/topics';

const styles = {
  main: {
    marginTop: 30,
    width: '90%',
    margin: '0 auto'
  }
};

const mapDispatchToProps = dispatch => ({
  onTopicsFetch: () => dispatch(doTopicsFetch())
});

const mapStateToProps = state => ({
  topics: state.topicsState.topics
});

class App extends Component {
  componentDidMount() {
    this.props.onTopicsFetch();
  }

  render() {
    const { classes, topics } = this.props;
    return(
      <div>
        <NavBar />
        <main className={classes.main}>
          <Switch>
            <Route exact path="/" render={(props) => <Topics {...props} topics={topics} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
