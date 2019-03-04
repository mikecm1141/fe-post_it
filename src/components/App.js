import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';
import TopicsContainer from './TopicsContainer';

const styles = {
  main: {
    marginTop: 30,
    width: '90%',
    margin: '0 auto'
  }
};

const mapDispatchToProps = dispatch => ({
  
});

const mapStateToProps = state => ({
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return(
      <div>
        <NavBar />
        <main className={classes.main}>
          <Switch>
            <Route
              exact path="/"
              render={(props) => <TopicsContainer {...props} />} 
            />
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
