import express from "express";
const app =express();
const port = 3000;

//rota
app.get('/', (req, res) => {
     res.send ("Olá, Mundo!")
})

//servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});