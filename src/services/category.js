import db from "../models"; // lay db
export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true, // lay ra object thuan cua js
        attributes: ["code", "value"],
      }); // lay tat ca du lieu trong bang Category
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "FAIL from getCategories",
        response,
      });
    } catch (err) {
      console.log("Error", err);
      reject(err);
    }
  });
