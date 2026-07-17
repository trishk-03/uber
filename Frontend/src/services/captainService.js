import axios from "axios";

const BaseUrl = "http://localhost:3000";

export const captainSignup = async (
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType
) => {
  try {
    const response = await axios.post(`${BaseUrl}/captains/register`, {
      fullname: {
        firstname:firstname,
        lastname:lastname,
      }, 
      email:email,
      password,
      vehicle: {
        color:color,
        plate:plate,
        capacity:capacity,
        vehicleType:vehicleType,
      },
    });

    return response;
  } catch (err) {
    console.error("Captain signup error:", err);
    throw err;
  }
}

export const login = async(email , password ) => {
    try{
       const response = await axios.post(`${BaseUrl}/captains/login`,{
        email:email,
        password:password
       })
       
       return response;
    }
    catch(e){
       console.log(e);
       throw e;
    }
}