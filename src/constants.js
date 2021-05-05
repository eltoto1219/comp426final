const prod = {
 url: {
  API_URL: 'http://18.215.154.83',}
};
const dev = {
 url: {
  API_URL: 'http://localhost:5000'
 }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
