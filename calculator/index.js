import express from 'express'
const app = express();
const port = 5000
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index.ejs");
    
  });

  app.post('/',(req,res)=>{
    console.log(res)
  })
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  