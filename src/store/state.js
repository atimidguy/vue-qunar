let defaultCity = '北京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  throw e;
}

export default {
  city: defaultCity
};
