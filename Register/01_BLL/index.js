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
//         uni ariel, floor no1
    `('001', 'Ariel', '01', '01'),
     ('002','Ariel', '01', '02'),
     ('003', 'Ariel', '01',  '03'),
     ('004', 'Ariel', '01',  '04'),
     ('005', 'Ariel', '01',  '05')
//  uni ariel, floor no2
    ('001', 'Ariel', '02', '01'),
     ('002','Ariel', '02', '02'),
     ('003', 'Ariel', '02',  '03'),
     ('004', 'Ariel', '02',  '04'),
     ('005', 'Ariel', '02',  '05');
//  uni ariel, floor no3
    ('001', 'Ariel', '03', '01'),
     ('002','Ariel', '03', '02'),
     ('003', 'Ariel', '03',  '03'),
     ('004', 'Ariel', '03',  '04'),
     ('005', 'Ariel', '03',  '05');
;`;

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
