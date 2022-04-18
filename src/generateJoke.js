import _ from 'lodash';
import axios from 'axios';

function generateJoke() {
  axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json'
    }
  }).then(res => {
    const { data } = res;
    document.getElementById('joke').innerHTML = data.joke;
  });
}

export default generateJoke;