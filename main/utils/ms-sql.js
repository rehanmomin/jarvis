var sql = require('mssql')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(`${process.env.SWEST_KEY}`)

config = require('../utils/get-config.js')
var dbconfig = config.getConfig(`${process.env.TEST_ENV}`)

const pool = new sql.ConnectionPool({
    connectionLimit : 10,
    server:cryptr.decrypt(dbconfig['dbserver']),
    database:cryptr.decrypt(dbconfig['dbInstance']),
    user:cryptr.decrypt(dbconfig['dbuser']),
    password:cryptr.decrypt(dbconfig['dbpassword']),
    port:Number(cryptr.decrypt(dbconfig['dbport']))
});

 
module.exports = {pool}
function executeSQLQuery(sqlStatement) {
    console.log(sqlStatement)
    return new Promise((resolve, reject) => {
        pool.connect().then(con => {
            let queryResult = new Promise((resolve, reject) => {
                con.query(sqlStatement, function (err, result, fields) {
                    if (err) {
                        console.log(err)
                    }
                    resolve(result)
                })
            })
            resolve(queryResult)
        })
    });
}

function closeSQl()  {
    console.log("Ms sql disconnected")
    return pool.close()
}

module.exports = { pool, executeSQLQuery, closeSQl }
