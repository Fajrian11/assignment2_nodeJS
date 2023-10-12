const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/teachers', teacherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});