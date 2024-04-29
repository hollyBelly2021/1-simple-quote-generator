import express from "express";
import axios from "axios";


const app = express();
const port = 3000;


app.use(express.static("public"))

app.get("/", async(req, res) => {
    try{
        const response = await axios.get("https://jacintodesign.github.io/quotes-api/data/quotes.json")
        const quote = response.data[Math.floor(Math.random() * response.data.length)];
        // console.log(quote)
        res.render("index.ejs", {
            data: quote
        })
    } catch(error){
        console.error("Failed to make request:", error.message);
    }
})


app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`)
})