const mysql = require('mysql2');
 
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// export function query(query, queryParams) {
//     let promise = pool.promise();

//     return promise.query(query, queryParams).then(rows => {
//         return rows[0];
//     }).catch(err => {
//         console.error(err);
//         throw err;
//     });
// }

const queryTest = function () {
    let promise = pool.promise();

    return promise.query('SELECT * FROM college_scorecard_data LIMIT 1').then(rows => {
        return rows[0];
    }).catch(err => {
        console.error(err);
        throw err;
    });
}

module.exports = {
    queryTest
}