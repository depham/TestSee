const db = require('../common/connect');


const DuLieuTron = function(dulieutron){
    this.DuLieuTronID = dulieutron.DuLieuTronID;
    this.Time = dulieutron.Time;
    this.Date = dulieutron.Date;
    this.MachineID = dulieutron.MachineID;
    this.NameProduct = dulieutron.NameProduct;
    this.STTM = dulieutron.STTM;
    this.M_CE1 = dulieutron.M_CE1;
    this.PV_CE1 = dulieutron.PV_CE1;
    this.M_CE2 = dulieutron.M_CE2;
    this.PV_CE2 = dulieutron.PV_CE2;
    this.M_CE3 = dulieutron.M_CE3;
    this.PV_CE3 = dulieutron.PV_CE3;
    this.PV_PG = dulieutron.PV_PG;

}

DuLieuTron.get_all = function(result){
    db.query("SELECT *FROM dulieutron", function(err, dulieutron){

        if(err){
            result(err);
            return;
        }
        else {
            result(dulieutron);
        }
        
    });
    
}

DuLieuTron.getByID = function(id, result){

    db.query("SELECT *FROM dulieutron WHERE DuLieuTronID = ?", id, function(err, dulieutron){

        if(err){
            result(null);
        }
        else {
            result(dulieutron);
        }
        
    });
    

    
}
/*
DuLieuTron.create = function(data, result){
    db.query("INSERT INTO dulieutron SET ?", data, function(err, dulieutron){
        if(err){
            result(null);
        }
        else {
            result({DuLieuTronID: dulieutron.insertId, ...data});
        }
    });
}
*/
DuLieuTron.create = function(data, result){
    db.query("INSERT INTO dulieutron SET ?", data, function(err, dulieutron){
        if(err){
            result(null);
        }
        else {
            result({DuLieuTronID: dulieutron.insertId, ...data});
        }
    });
}

DuLieuTron.remove = function(id, result){
    db.query("DELETE FROM dulieutron WHERE DuLieuTronID = ?", id, function(err, dulieutron){
        if(err){
            result(null);
        }
        else {
            result("Đã xoá DLT có ID: " + id);
        }
    });
}

DuLieuTron.update = function(b, result){
    db.query("UPDATE dulieutron SET DuLieuTronID = ?, Time = ?, Date = ?, MachineID = ?, NameProduct = ?, STTM = ?, M_CE1 = ?, PV_CE1 = ?, M_CE2 = ?, PV_CE2, M_CE3 = ?, PV_CE3, PV_PG = ? WHERE id = ?", 
    [b.DuLieuTronID, b.Time, b.Date, b.MachineID, b.NameProduct, b.STTM, b.M_CE1, b.PV_CE1, b.M_CE2, b.PV_CE2, b.M_CE3, b.PV_CE3. b.PV_PG], function(err, dulieutron){
        if(err){
            result(null);
        }
        else {
            result(b);
        }
    });
}
module.exports = DuLieuTron;