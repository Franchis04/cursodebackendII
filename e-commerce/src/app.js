import express from "express";
import envsConfig from "./config/envs.config.js";
import { connectMongoDB } from "./config/mongoDB.config.js";
import router from "./routes/router.js";
import passport from "./config/passport/passport.config.js";
import session from "express-session";
connectMongoDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

app.use(express.static("public"));
app.use(
  session({
    secret: envsConfig.SESSION_SECRET,
    resave: true, 
    saveUninitialized: true, 
    cookie: { secure: false, maxAge: 500000 }, 
  })
);

app.use("/api", router);

app.listen(envsConfig.PORT, () => {
  console.log(`Servidor en el puerto ${envsConfig.PORT}`);
});