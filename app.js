const express =require('express');
const mongoose =require("mongoose");
const dotenv =require('dotenv');

const cors=require('cors');
const app = express();
app.use(cors())

const categorieRouter=require("./routes/categorie.route");
const scategorieRouter=require("./routes/scategorie.route");
const articleRouter=require("./routes/article.route");
const scategorie = require('./models/scategorie');
const article = require('./models/article');
dotenv.config()
app.use(express.json());
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données',
err);
process.exit();
});
app.get("/",(req,res)=>{
res.send("Bibliothèque");
});

app.use("/api/categorie",categorieRouter)
app.use("/api/scategorie",scategorieRouter)
app.use("/api/article",articleRouter)
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });

module.exports = app;