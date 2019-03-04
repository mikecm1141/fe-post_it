import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { doTopicsFetch } from '../actions/topics';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

import Topic from './Topic.js';

const mapStateToProps = state => ({
  topics: state.topicsState.topics
});

const mapDispatchToProps = dispatch => ({
  onTopicsFetch: () => dispatch(doTopicsFetch())
});

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

class TopicsContainer extends Component {
  componentDidMount() {
    this.props.onTopicsFetch();
  }

  render() {
    const { topics, classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Topic</TableCell>
              <TableCell align="center">Posts</TableCell>
              <TableCell align="center">Replies</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              topics.map(topic => (
                <Topic
                  id={topic.id}
                  title={topic.title}
                  description={topic.description}
                  key={topic.id}
                />
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TopicsContainer.propTypes = {
  topics: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TopicsContainer));
