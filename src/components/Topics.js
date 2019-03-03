import React from 'react';

import Typography from '@material-ui/core/Typography';

class Topics extends React.Component {
  render() {
    const { topics } = this.props;
    return(
      <div>
        {
          <Typography variant="h6">
            {
              topics.map(topic => (
                <div key={topic.id}>
                  <p>{topic.id}</p>
                  <p>{topic.title}</p>
                  <p>{topic.description}</p>
                </div>
              ))
            }
          </Typography>
        }
      </div>
    );
  }
}

export default Topics;
