import axios from 'axios';
import mockData from '../MockData/WeatherData.json';
export const GET_COMPLETE_WEATHER_DATA = 'GET_COMPLETE_WEATHER_DATA'
export const SET_CURRENT_DETAILS = 'SET_CURRENT_DETAILS'

export const fetchData = (enteredCity) => dispatch => {
  dispatch(getCompleteWeatherData(mockData && mockData.States));
  let isEnteredCityFound = false;
  Object.entries(mockData.States).map((state,stateKey)=>{
    state[1].cities.map((cityDetails,key)=>{
      if(cityDetails.name === enteredCity) {
        const data ={
          currentdate: state[1].currentdate,
          time: state[1].time,
          city: enteredCity,
          forecast: cityDetails.forecast
        }
        isEnteredCityFound = true;
        dispatch(setCurrentData(data));
      }
    })
  })
  if(!isEnteredCityFound){
    dispatch(setCurrentData(''));
  }
}
  
const getCompleteWeatherData = data => ({
  type: GET_COMPLETE_WEATHER_DATA,
  data:data
}) 


const setCurrentData = data => ({
  type: SET_CURRENT_DETAILS,
  data:data
})