const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Students_marks',
  password: '1234', 
  port: 5432,
});

app.use(cors());

app.get('/marklist', (req, res) => {
  pool
    .query('SELECT * FROM marklist')
    .then(result=> {
      res.json(result.rows);
    })
 
});
app.get('/marklists', async (req, res) => {
        const value = await pool.query("SELECT * FROM marklist WHERE (mark > 75 OR mark2 > 75) AND NOT (mark < 50 OR mark2 < 50)");
        res.json(value.rows);
})
app.listen(5000);