import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  // Async Promise needs to run  if you call API - asyc will happen in future
  // new Promise - key word to create a Promise
  // resolve - you promise to return it
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
// if you created a promise it becomes to have Then - actions with what happened in future
// inside then.(func name)-> returns us result of what we promised to get back

// Fetch() - interface around promises that wraps the ability to talk to external APIs
// When response came back as JSON object, you need to parce it, and do what you want to do
// const myFetch = fetch('https://jsonplaceholder.typicode.com/')
// .then(response => response.json())
// .then(json => console.log(res));
