import axios from "axios";
import config from "../config/config";

const login = async ({ email, password }) => {
  const user = await axios.post(`${config.baseApiUrl}/api/auth/login`, {
    email,
    password,
  });
  console.log("this is User", user);
  return user;
};

export { login };
