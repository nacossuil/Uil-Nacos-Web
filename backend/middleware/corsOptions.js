const allowedOrigins = [
  "http://localhost:5173",
  "https://uil-nacos-web.vercel.app",
];

export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(
      new Error("The CORS policy does not allow access from this origin."),
      false
    );
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
