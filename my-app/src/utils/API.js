import axios from "axios";

//This link returns the amount of random users you want
const randomUser = 'https://randomuser.me/api/?results=100';

export default {
  // Gets all users
  getRandomEmployees: function() {
    return axios.get(randomUser);
  }
};