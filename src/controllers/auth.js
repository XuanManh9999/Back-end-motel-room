import * as authService from "../services/auth.js";
export const register = async (req, res) => {
  try {
    const { name, phone, password } = req.body;
    if (!name || !phone || !password) {
      return res.status(400).json({
        err: -1,
        message: "name, phone, password are required",
      });
    }
    const response = await authService.registerServices(name, phone, password);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      err: -1,
      message: "fail at auth controller" + err,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({
        err: -1,
        message: "phone, password are required",
      });
    }
    const response = await authService.loginServices(phone, password);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      err: -1,
      message: "fail at auth controller" + err,
    });
  }
};
