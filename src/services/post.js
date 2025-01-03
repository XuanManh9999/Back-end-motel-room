import db from "../models";
const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true, // gộp các object con vào object cha
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"], // chỉ lấy trường image
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"], // chỉ lấy trường price, acreage, published, hashtag
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo", "avatar"], // chỉ lấy trường price, acreage, published, hashtag
          },
        ],
        attributes: [
          "id",
          "title",
          "star",
          "description",
          "labelCode",
          "address",
          "categoryCode",
          "createdAt",
          "updatedAt",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "get post failed",
        data: response,
      });
    } catch (err) {
      reject(err);
    }
  });

const getPostsLimitServices = (offset) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true, // gộp các object con vào object cha
        offset: +offset * +process.env.LIMIT || 0, // lấy từ vị trí offset * limit
        limit: +process.env.LIMIT || 10, // lấy limit bài viết
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"], // chỉ lấy trường image
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"], // chỉ lấy trường price, acreage, published, hashtag
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo", "avatar"], // chỉ lấy trường price, acreage, published, hashtag
          },
        ],
        attributes: [
          "id",
          "title",
          "star",
          "description",
          "labelCode",
          "address",
          "categoryCode",
          "createdAt",
          "updatedAt",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "get post failed",
        data: response,
      });
    } catch (err) {
      reject(err);
    }
  });

export { getPostsService, getPostsLimitServices };
