import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Topic = ({ id, title, description }) => (
  <TableRow key={id}>
    <TableCell component="th" scope="row">
      <Typography variant="h5">{title}</Typography>
      <p>{description}</p>
    </TableCell>
    <TableCell align="center">5</TableCell>
    <TableCell align="center">20</TableCell>
  </TableRow>
);

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Topic;
