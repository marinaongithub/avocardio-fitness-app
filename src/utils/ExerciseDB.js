import axios from "axios";

// const URL =
//   process.env.REACT_APP_API_URL || "https://exercisedb.p.rapidapi.com";

const URL = "https://exercisedb.p.rapidapi.com";

console.log("Which resource are we using?", URL);

// ===> Connect to ExerciseDB
// This is just so we do not need to repeat the full headers every time.
const config = {
  headers: {
    "X-RapidAPI-Key": "96063677a3mshdd737efbef9115cp1ea757jsn1b7fecb77547",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const API = {
  getBodyParts: function () {
    return axios
      .get(`${URL}/exercises/bodyPartList`, config)
      .then(function (response) {
        return response.data;
      });
  },
  getExercisesByBodyPart: function (bodyPart) {
    return axios
      .get(`${URL}/exercises/bodyPart/${bodyPart}`, config)
      .then(function (response) {
        return response.data.slice(0, 3);
      });
  },
  getExercisesByMuscleGroup: function (muscleGroup) {
    return axios
      .get(`${URL}/exercises/target/${muscleGroup}`, config)
      .then(function (response) {
        return response.data.slice(0, 3);
      });
  },
  getExercisesByEquipment: function (equipment) {
    return axios
      .get(`${URL}/exercises/equipment/${equipment}`, config)
      .then(function (response) {
        return response.data.slice(0, 3);
      });
  },
  getExercises: function (search) {
    return axios
      .get(`${URL}/exercises/${search}`, config)
      .then(function (response) {
        return response.data.slice(0, 3);
      });
  },
};

export default API;
