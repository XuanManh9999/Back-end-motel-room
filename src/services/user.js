import model from "../models";
const getUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
      const users = await model.User.findAll({
        attributes: { exclude: ["password"] },
      });
      resolve({
        error: users.length == 0 ? 1 : 0,
        msg: users.length == 0 ? "No users found" : "Users found",
        data: users,
      });
    } catch (err) {
      reject(err);
    }
  });
export { getUsers };
