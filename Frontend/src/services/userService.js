import axios from "axios";

const BaseUrl = "http://localhost:3000";

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/users/login`,
      {
        email: email,
        password: password,
      }
    );

    return response;
  } catch (e) {
    console.error(e);
  }
};


export const register = async (firstname, lastname, email, password) => {
  try {
    const response = await axios.post(`${BaseUrl}/users/register`, {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};