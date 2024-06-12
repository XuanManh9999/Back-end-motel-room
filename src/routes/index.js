import routerAuth from "./auth.js";
import routerInsert from "./insert.js";
const configAPI = (app) => {
  app.use("/api/v1/auth", routerAuth);
  app.use("/api/v1/insert", routerInsert);
  return app.use("/", (req, res) => {
    return res.send("Welcome to the API");
  });
};
export default configAPI;
