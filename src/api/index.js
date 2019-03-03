const BASE_URL = 'http://localhost:3000/graphql';

const topicsFetch = () => {
  const query = '{ allTopics { id title description } }';

  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(response => response.json())
}

export {
  topicsFetch
};
