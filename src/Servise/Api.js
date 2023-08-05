import axios from 'axios';

const API_KEY = '38168807-d28e71a0feea929e703b592b4';

export const fetchImg = async params => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      photo: 'horizontal',
      key: API_KEY,
      q: '',
      ...params,
    },
  });
  return data;
};
