http://localhost:3000
http://localhost:3000/saludo
http://localhost:3000/mensaje/juan 
app.use(express.json());

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});
