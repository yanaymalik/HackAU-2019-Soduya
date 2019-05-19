const dal = require('./../00_DAL/index');


function connectDb() {
    return dal.connect();
}

function initDb() {
    dropTableChair();
}


function dropTableChair() {
    let query = "DROP TABLE IF EXISTS `chair`";
    
    dal.runQuery(query,
        (res, extra) => { createTableChair()},
        (err) => { console.log("sorry err", err) }
    );
}

function createTableChair() {
    let query = "CREATE TABLE `chair` ("+
    "`Chair_ID`  VARCHAR(100)            NOT NULL,"+
    "`University_name`                  NOT NULL,"+
    "`Floor`        VARCHAR(10)          NOT NULL,"+
    "`Table`        VARCHAR(10)          NOT NULL,"+   
    "PRIMARY KEY (`Chair_ID`) );";
    
    dal.runQuery(query,
        (res, extra) => { insertChair()},
        (err) => { console.log("sorry err", err) }
    );
}

function insertChair() {
    let query = "INSERT INTO `chair` VALUES " +
    `('001', 'car', 'NISSAN SUNNY 1.6L', '4 Door Saloon, Automatic', 99.99),
     ('002','car', 'TOYOTA ALTIS 1.6L', '4 Door Saloon, Automatic', 99.99),
     ('003', 'car', 'HONDA CIVIC 1.8L',  '4 Door Saloon, Automatic', 119.99),
     ('004', 'truck', 'NISSAN CABSTAR 3.0L',  'Lorry, Manual ', 89.99),
     ('005', 'truck', 'OPEL COMBO 1.6L',  'Van, Manual', 69.99);`;

    dal.runQuery(query,
        (res, extra) => { console.log(res, extra) },
        (err) => { console.log("sorry err", err) }
    );
}
function getChairs(successCallBack, failCallBack) {
    let query="SELECT * FROM `Chairs`;";
    dal.runQuery(query,successCallBack,failCallBack);
}

function addCar(newCar,successCallBack, failCallBack) {
    let query="INSERT INTO `vehicles` VALUES " +
    `('${newCar.veh_reg_no}', '${newCar.category}', '${newCar.brand}', '${newCar.desc}', ${newCar.daily_rate})`;
    dal.runQuery(query,successCallBack,failCallBack);
}

function deleteCar(carId,successCallBack, failCallBack) {
    let query="DELETE FROM `vehicles` "+ 
              `WHERE veh_reg_no= '${carId}'`;
    
    dal.runQuery(query,successCallBack,failCallBack);
}


function editCar(carId,updatedCar,successCallBack, failCallBack) {
    let query="UPDATE `vehicles` "+ 
    `SET daily_rate = ${updatedCar.daily_rate} WHERE veh_reg_no = '${carId}';`
    
    dal.runQuery(query,successCallBack,failCallBack);
}



//--------------------------------------------------------------------------------------
module.exports = {
    "connectDb": connectDb,
    "initDb": initDb,
    "getCars":getCars,
    "addCar":addCar,
    "deleteCar":deleteCar,
    "editCar":editCar
}
