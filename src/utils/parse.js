import qs from 'querystring';

const mountQuery = (url, query = {}) => {
  if (Object.keys(query).length) {
    return `${url}?${qs.stringify(query)}`;
  }

  return url;
};

export default mountQuery;
