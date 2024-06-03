const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const users = [];

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ success: true, message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
