"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Image, {
        foreignKey: "imagesId",
        targetKey: "id",
        as: "images",
      }); // chua khoa phu thi la belongsTo
      Post.belongsTo(models.Attribute, {
        foreignKey: "attributesId",
        targetKey: "id",
        as: "attributes",
      }); // chua khoa phu thi la belongsTo
      Post.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "user",
      }); // chua khoa phu thi la belongsTo
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      star: DataTypes.STRING,
      labelCode: DataTypes.STRING,
      address: DataTypes.STRING,
      attributesId: DataTypes.STRING,
      categoryCode: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.STRING,
      overviewId: DataTypes.STRING,
      imagesId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
