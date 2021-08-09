import axios from 'axios';
import PropTypes from 'prop-types';

const API_OPTIONS = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '21926064-24ac70c74b5af685f398413a7',
  IMAGE_TYPE: 'image_type=photo&orientation=horizontal',
  PER_PAGE: 12,
};

const ApiServiseFetch = (query, page) => {
  const { BASE_URL, API_KEY, IMAGE_TYPE, PER_PAGE } = API_OPTIONS;
  return axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${IMAGE_TYPE}&per_page=${PER_PAGE}`,
  );
};

ApiServiseFetch.propTypes = {
  options: PropTypes.shape({
    query: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    BASE_URL: PropTypes.string.isRequired,
    API_KEY: PropTypes.string.isRequired,
    IMAGE_TYPE: PropTypes.string.isRequired,
    PER_PAGE: PropTypes.number.isRequired,
  }),
};

export default ApiServiseFetch;
