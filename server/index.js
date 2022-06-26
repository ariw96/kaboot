import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import errorHandler from "./middleware/errorMiddleware.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
//middleware
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB Connected");
	} catch (err) {
		throw err;
	}
};

// const server = http.createServer(app);
// const io = new Server(server, {
// 	cors: {
// 		origin: "http://localhost:3000",
// 		methods: ["GET", "POST"],
// 	},
// });
// io.on("connection", (socket) => {
// 	console.log(`user connected: ${socket.id}`);
// 	socket.on("join_room", ({ username, room }) => {
// 		socket.join(room);
// 		console.log(`${username} joined ${room}`);
// 	});

// 	socket.on("disconnect", () => {
// 		console.log(`user disconnected: ${socket.id}`);
// 	});
// });

app.use("/auth", authRoute);

app.use("/users", usersRoute);
app.listen(5000, () => {
	connect();
	console.log("Server is running on port 5000");
});
