const express = require('express');
const app = express();
app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hello from Megha's Microservice API",
    vm: "Megha_microservice_api",
    status: "success"
  });
});
app.listen(3000, '0.0.0.0', () => {
  console.log("Microservice API running on port 3000");
});
