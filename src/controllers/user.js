import * as userService from "../services/user.js";

const getUsers = async (_, res) => {
  try {
    const response = await userService.getUsers();
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { getUsers };
