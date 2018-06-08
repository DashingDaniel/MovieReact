import axios from 'axios';


export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(name){
    // enter the api key below
    const API_KEY = '';
    const url = `http://www.omdbapi.com/?t=${name}&apikey=${API_KEY}`;
    const request = axios.get(url);

    return{
        type: FETCH_MOVIE,
        payload: request
    };
}