/****** need a valid api key from https://pixabay.com ******/

const apiKey = ""; // add valid api key here

const perPage = 12;
const baseUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&pretty=true&per_page=${perPage}`;

const numberFormatter = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { apiKey, baseUrl, numberFormatter };
