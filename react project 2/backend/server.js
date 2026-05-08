import "dotenv/config"
import express from "express"
import cors from "cors"


const app = express()

app.use(cors({origin:true, credentials:true}))
app.use(express.json());

app.get("/" , (req,res) => res.json({status: "ok"}));


app.use("/api/auth" , authRouter);
app.use("api/user" , useRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT ,  ()=> {
    console.log(`Backend listening on http://localhost:${PORT}`);
})