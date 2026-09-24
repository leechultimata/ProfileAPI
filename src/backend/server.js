import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.status(200).send("Hello");
});
app.get("/api", (req, res) => {
    const apiStatus = {
        ok: true,
        version: "1.0.0"
    };
    res.status(200).json(apiStatus);
});
app.listen(3020);
//localhost:3020
