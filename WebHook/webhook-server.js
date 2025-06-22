const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
 console.log('Webhook received:', req.body);

 res.status(200).send('Event received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Webhook server running on http://localhost:${PORT}`);
});