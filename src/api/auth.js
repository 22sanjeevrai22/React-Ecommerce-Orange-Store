import axios from "axios";
import config from "../config/config";

const login = async () => {
  const user = await axios.post(`${config.baseApiUrl}/auth/login`);
  return user;
};

export { login };
