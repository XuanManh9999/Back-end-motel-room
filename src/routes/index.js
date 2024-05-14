import routerAuth from "./auth.js";

const configAPI = (app) => {
  app.use("/api/v1/auth", routerAuth);

  return app.use("/", (req, res) => {
    return res.send("Welcome to the API");
  });
};
export default configAPI;
