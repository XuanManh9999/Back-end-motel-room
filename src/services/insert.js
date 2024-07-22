import db from "../models"; // lay db
import bycrypt from "bcryptjs"; // ma hoa password
import jwt from "jsonwebtoken"; // tao token
import { v4 } from "uuid"; // tao id
import chothuecanho from "../data/chothuecanho.json";
import chothuephongtro from "../data/chothuephongtro.json";
import nhachothue from "../data/nhachothue.json";
import matbangvanphong from "../data/matbangvanphong.json";
import gennerateCode from "../utils/rendercode";

const dataBody = chothuecanho.body;

const hashPassword = (password) =>
  bycrypt.hashSync(password, bycrypt.genSaltSync(10));

export const insertServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let postId = v4();
        let labelCode = gennerateCode(item?.headerDetail?.class?.classType);
        let attributesId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();
        await db.Post.create({
          id: postId,
          title: item?.headerDetail?.title,
          star: item?.headerDetail?.star,
          labelCode,
          address: item?.headerDetail?.address,
          attributesId: attributesId,
          categoryCode: "MBVP",
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          overviewId,
          imagesId,
        });
        await db.Attribute.create({
          id: attributesId,
          price: item?.headerDetail?.attributes?.price,
          acreage: item?.headerDetail?.attributes?.acreage,
          published: item?.headerDetail?.attributes?.published,
          hashtag: item?.headerDetail?.attributes?.hashtag,
        });
        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });
        await db.Label.findOrCreate({
          where: {
            code: labelCode,
          },
          defaults: {
            code: labelCode,
            name: item?.headerDetail?.class?.classType,
          },
        });
        await db.Overview.create({
          id: overviewId,
          code: item?.overView?.content.find((i) => i.name === "Mã tin:")
            ?.content,
          area: item?.overView?.content.find((i) => i.name === "Khu vực")
            ?.content,
          type: item?.overView?.content.find((i) => i.name === "Loại tin rao:")
            ?.content,
          target: item?.overView?.content.find(
            (i) => i.name === "Đối tượng thuê:"
          )?.content,
          bonus: item?.overView?.content.find((i) => i.name === "Gói tin:")
            ?.content,
          created: item?.overView?.content.find((i) => i.name === "Ngày đăng:")
            ?.content,
          expire: item?.overView?.content.find(
            (i) => i.name === "Ngày hết hạn:"
          )?.content,
        });
        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
            ?.content,
          password: hashPassword("123456"),
          phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
            ?.content,
          zalo: item?.contact?.content.find((i) => i.name === "Zalo")?.content,
        });
      });

      resolve("success");
    } catch (err) {
      reject(err);
    }
  });
