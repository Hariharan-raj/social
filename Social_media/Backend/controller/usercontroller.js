import * as userservice from "../services/user-service.js";

const setResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

// this function is used to set the error in response
const setError = (err, response) => {
  response.status(500);
  response.json(err);
};

export const loginuser = async (req, res) => {
  try {
    const newuser = await userservice.save(req, res);
    setResponse(newuser, res);
  } catch (error) {
    setError(error, res);
  }
};

export const getuserdetails = async (req, res) => {
  try {
    const users = await userservice.findall_users();
    setResponse(users.reverse(), res);
  } catch (error) {
    setError(error, res);
  }
};

export const updateuserdetails = async (req, res) => {
  try {
    console.log("inside edituser");
    console.log(req.body);
    const updateduser = await userservice.update_user(req, res);
    setResponse(updateduser, res);
  } catch (error) {
    setError(error, res);
  }
};

export const deleteuserdetails = async (req, res) => {
  try {
    // console.log("inside deleteuser");
    const deleteduser = await userservice.delete_user(req, res);
    setResponse(deleteduser, res);
  } catch (error) {
    setError(error, res);
  }
};
