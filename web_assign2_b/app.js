const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
app.use(bodyParser.json());


app.get('/hello/Haseeb', (req, res) => {
    res.status(200).send('Hello, Haseeb');
});

app.post('/profile', (req, res) => {
    const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;

    if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact || !Contact.Email || !Contact.Phone) {
        return res.status(400).json({ error: "Missing required fields in profile data." });
    }

    // Append data to profiles.json
    fs.readFile('./profiles.json', (err, data) => {
        if (err) throw err;
        const profiles = JSON.parse(data);
        profiles.push(req.body);
        fs.writeFile('./profiles.json', JSON.stringify(profiles, null, 2), (err) => {
            if (err) throw err;
            res.json({ message: "Profile saved successfully" });
        });
    });
});

// e. GET request to retrieve profiles from a CSV file
app.get('/profiles', (req, res) => {
    const profiles = [];
    fs.createReadStream('profiles.csv')
        .pipe(csv())
        .on('data', (row) => {
            profiles.push(row);
        })
        .on('end', () => {
            res.status(200).json(profiles);
        })
        .on('error', (err) => {
            res.status(500).json({ error: 'Error reading CSV file' });
        });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
