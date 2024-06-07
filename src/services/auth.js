import db from "../models"; // lay db
import bycrypt from "bcryptjs"; // ma hoa password
import jwt from "jsonwebtoken"; // tao token
import { v4 } from "uuid"; // tao id
const hashPassword = (password) =>
  bycrypt.hashSync(password, bycrypt.genSaltSync(10));

export const registerServices = (name, phone, password) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: hashPassword(password),
          id: v4(),
        },
      });

      const token =
        response[1] &&
        jwt.sign(
          { id: response[0]?.id, phone: response[0]?.phone },
          process.env.SECRET_KEY,
          {
            expiresIn: "2d",
          }
        );
      resolve({
        err: token ? 0 : 2,
        msg: token ? "register success" : "phone number has been aldready used",
        token: token || null,
      });
    } catch (err) {
      reject(err);
    }
  });

export const loginServices = (phone, password) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true, // no tra ve mot object co data, khong se la inste cuar sequlize
      });
      if (!response) {
        resolve({ err: 1, msg: "phone number not found" });
      }
      const checkPassword = bycrypt.compareSync(password, response.password);

      if (!checkPassword) {
        resolve({ err: 1, msg: "password is incorrect" });
      }

      const token = jwt.sign(
        { id: response.id, phone: response.phone },
        process.env.SECRET_KEY,
        {
          expiresIn: "2d",
        }
      );
      resolve({ err: 0, msg: "login success", token });
    } catch (err) {
      reject(err);
    }
  });
