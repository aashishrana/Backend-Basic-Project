import  express  from "express";
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/instagram', (req, res) => {
    res.send("<h1>instagram page route </h1>" )
});

app.get('/twitter', (req,res) => {
    res.send("<h2>Welcome on Twitter </h2>")
})
export default app;