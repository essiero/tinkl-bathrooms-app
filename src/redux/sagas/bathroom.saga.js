import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// fetches list of bathrooms according (eventually) to search query parameters
function* fetchBathrooms() {
    try {
      const response = yield axios({
        method: 'GET',
        url: '/bathrooms'
      })
      yield put({
        type: 'SET_BATHROOMS',
        payload: response.data
      })
    } catch (error) {
      console.log('Saga function fetchBathrooms failed: ', error)
    }
  }
  function* fetchBathroomsGeocoding() {
    try {
      const response = yield axios({
        method: 'GET',
        url: '/api'
      })
      yield put({
        type: 'SET_BATHROOMS_GEOCODING',
        payload: response.data
      })
    } catch (error) {
      console.log('Saga function fetchBathroomsGeocoding failed: ', error)
    }
  }

function* bathroomSaga() {
    yield takeLatest('SAGA/FETCH_BATHROOMS', fetchBathrooms);
    yield takeLatest('SAGA/FETCH_BATHROOMS_GEOCODING', fetchBathroomsGeocoding);
}
  
export default bathroomSaga;