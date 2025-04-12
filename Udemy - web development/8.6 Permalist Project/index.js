import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: 'postgres',
  host : 'localhost',
  database : 'permalist',
  password : 'darulhamd',
  port:'5432'
})
db.connect();

// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];

app.get("/", async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM items ORDER BY id ASC');
    const items = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });

  }catch(error){
    console.log(error)
  }
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {
   const newText = req.body.updatedItemTitle
   const currentId = req.body.updatedItemId
   const result = db.query(`ALTER TABLE items SET text=${newText} WHERE id=${currentId}`)
   res.redirect('/')
});

app.post("/delete", (req, res) => {
  const newText = req.body.updatedItemTitle
   const currentId = req.body.updatedItemId
  const result = db.query(`DELETE FROM items WHERE text=${newText} AND id=${currentId}`)
  res.redirect('/')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
