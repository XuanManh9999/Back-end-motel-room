import * as postService from "../services/post.js";
const getPostsController = async (_, res) => {
  try {
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getPostsLimitServices = async (req, res) => {
  try {
    const page = req.query.page;
    console.log("check page", page);
    const response = await postService.getPostsLimitServices(page);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export { getPostsController, getPostsLimitServices };
