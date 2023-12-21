const express =require('express');
const mongoose =require("mongoose");
const dotenv =require('dotenv');
const app = express();
const categorieRouter=require("./routes/categorie.route")
dotenv.config()
app.use(express.json());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
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
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });