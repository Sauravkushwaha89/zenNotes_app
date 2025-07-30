import express from "express";
 import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import  dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

const app = express();
dotenv.config();
const PORT= process.env.PORT|| 3000

//console.log(process.env.MONGO_URI);

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server started on port:",PORT);
    });
});
// app.listen(PORT, ()=>{
//     console.log("server started on port:",PORT);
// });

