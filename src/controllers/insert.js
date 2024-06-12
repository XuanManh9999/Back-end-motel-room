import * as insertServices from "../services/insert.js";
export const insert = async (req, res) => {
  try {
    const response = await insertServices.insertServices();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      err: -1,
      message: "fail at insert controller" + err,
    });
  }
};
