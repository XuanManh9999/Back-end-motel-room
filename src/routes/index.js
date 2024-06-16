import routerAuth from "./auth.js";
import routerInsert from "./insert.js";
import routerCategory from "./category.js";
const configAPI = (app) => {
  app.use("/api/v1/auth", routerAuth);
  app.use("/api/v1/insert", routerInsert);
  app.use("/api/v1/category", routerCategory);
  return app.use("/", (req, res) => {
    return res.send("Welcome to the API");
  });
};
export default configAPI;
