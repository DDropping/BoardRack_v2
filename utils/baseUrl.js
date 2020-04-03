const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://localhost:3000'
    : 'http://localhost:3000';

export default baseUrl;
