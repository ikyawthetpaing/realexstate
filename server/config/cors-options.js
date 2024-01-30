require("dotenv").config();

const corsOptions = {
  origin: process.env.REACT_APP_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: "Content-Range,X-Content-Range",
  maxAge: 3600,
};

module.exports = { corsOptions };
