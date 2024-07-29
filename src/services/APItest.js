import axios from 'axios';

import APIBase from './APIBase';

const APItest = async () => {
  try {
    const response = await axios.get(APIBase);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default APItest;
