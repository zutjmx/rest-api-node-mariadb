const express = require('express');
const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rutas
app.use(require('./routes/employees'));

// Iniciar servidor ...
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto:', app.get('port'));
});
