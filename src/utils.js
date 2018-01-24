import axios from 'axios';

const getDataSource = async (searchText, type) => {
  const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru',
  });

  instance.defaults.headers.common.Authorization =
    'Token 315cea5546ca982f7f4c2b522b0e00a44b78dff8';
  instance.defaults.headers.common.Accept = 'application/json';
  instance.defaults.headers.post['Content-Type'] = 'application/json';

  const types = {
    name: {
      link: 'fio',
      data: {
        query: searchText,
        parts: 'NAME',
      },
    },
    surname: {
      link: 'fio',
      data: {
        query: searchText,
        parts: 'SURNAME',
      },
    },
    midname: {
      link: 'fio',
      data: {
        query: searchText,
        parts: 'PATRONYMIC',
      },
    },
    address: {
      link: 'address',
      data: {
        query: searchText,
      },
    },
    employer: {
      link: 'party',
      data: {
        query: searchText,
      },
    },
  };

  const response = await instance.post(
    `suggestions/api/4_1/rs/suggest/${types[type].link}`,
    types[type].data,
  );

  const result = response.data.suggestions;
  return result;
};

export default getDataSource;
