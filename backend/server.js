const express = require('express');
const app = express();
const port = 3000;

app.get('/misitio', (req, res) => {
  res.send('Bienvenido a mi sitio web');
});

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
});

app.get('/misitio/about', (req,res)=>{
  res.send('<h1>Acerca de nosotros</h1>');
 });

app.get('/misitio/gastos', (req,res)=>{
res.json(
  {
    gasto:'Salud',
    monto:14575.60,
    informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
  });
});

app.use(express.json());

app.post('/misitio/calculo', (req, res)=>{
  console.log(req.body);
  res.send('Calculo de Impuesto a la Renta');
});

app.post('/misitio/usuarios/:id',(req, res)=>{
console.log(req.body);
console.log(req.params);
res.send('Usuario nuevo registrado');
})

app.put('/misitio/usuarios/:id',(req, res)=>{
  console.log(req.body);
  console.log(req.params);
  res.send('Usuario actualizado');
  })

app.delete('/misitio/usuarios/:id', (req,res)=>{
  res.send('Usuario '+ (req.params.id) +' borrado');
  });