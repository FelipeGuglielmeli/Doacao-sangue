const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const doadoresRoutes = require('./routes/doadores');
const doacoesRoutes = require('./routes/doacoes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/doadores', doadoresRoutes);
app.use('/doacoes', doacoesRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
