const express = require('express');
const cors = require('cors');
const PORT = 3403;
const app = express();

app.use(express.json()); // Only use JSON parser if needed
app.use(cors());

app.get('/', (req, res) => {
    res.send('server is started');
});

app.get('/course', (req, res) => {
    res.send([
        {
            "Id": 1,
            "ShortForm" : "BCA",
            "FullForm" : "Bachelor of Computer Applications"
        },
        {
            "Id": 2,
            "ShortForm" : "BA",
            "FullForm": "Bachelor of Arts"
        },
        {
            "Id": 3,
            "ShortForm" : "BBA",
            "FullForm": "Bachelor of Business Administration"
        },
        {
            "Id": 4,
            "ShortForm" : "B.Com",
            "FullForm": "Bachelor of Commerce"
        },
        {
            "Id": 5,
            "ShortForm" : "BSc",
            "FullForm": "Bachelor of Science"
        },
        {
            "Id": 6,
            "ShortForm" : "B.Ed",
            "FullForm": "Bachelor of Education"
        },
        {
            "Id": 7,
            "ShortForm" : "BSW",
            "FullForm": "Bachelor of Social Work"
        },
        {
            "Id": 8,
            "ShortForm" : "BLIS",
            "FullForm": "Bachelor of Library and Information Science"
        },
        {
            "Id": 9,
            "ShortForm" : "BAH",
            "FullForm": "Bachelor of Arts (Honours)"
        },
        {
            "Id": 10,
            "ShortForm" : "BAH - History",
            "FullForm": "Bachelor of Arts (Honours) - History"
        },
        {
            "Id": 11,
            "ShortForm" : "BAH - English",
            "FullForm": "Bachelor of Arts (Honours) - English"
        },
        {
            "Id": 12,
            "ShortForm" : "BAH - Political ",
            "FullForm": "Bachelor of Arts (Honours) - Political "
        },
        {
            "Id": 13,
            "ShortForm" : "BAH - Hindi",
            "FullForm": "Bachelor of Arts (Honours) - Hindi"
        },
        {
            "Id": 14,
            "ShortForm" : "BAH - Sociology",
            "FullForm": "Bachelor of Arts (Honours) - Sociology"
        },
        {
            "Id": 15,
            "ShortForm" : "BAH - Psychology",
            "FullForm": "Bachelor of Arts (Honours) - Psychology"
        },
        {
            "Id": 16,
            "ShortForm" : "BCom - F&A",
            "FullForm": "Bachelor of Commerce (Finance & Accounts)"
        },
        {
            "Id": 17,
            "ShortForm" : "BSc - Math",
            "FullForm": "Bachelor of Science (Mathematics)"
        },
        {
            "Id": 18,
            "ShortForm" : "BPA",
            "FullForm": "Bachelor of Public Administration"
        },
        {
            "Id": 19,
            "ShortForm" : "BHM",
            "FullForm": "Bachelor of Hotel Management"
        },
        {
            "Id": 20,
            "ShortForm" : "BTTM",
            "FullForm": "Bachelor of Tourism and Travel Management"
        },

    ]);
});

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
});
