import * as serivecesCategory from "../services/category.js";
export const getCategories = async (req, res) => {
  try {
    const response = await serivecesCategory.getCategories();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      err: 1,
      msg: "Error Server from getCategories controller" + err,
    });
  }
};
