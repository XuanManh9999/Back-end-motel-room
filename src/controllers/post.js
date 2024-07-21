import * as postService from "../services/post.js";
const getPostsController = async (_, res) => {
  try {
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
export { getPostsController };
