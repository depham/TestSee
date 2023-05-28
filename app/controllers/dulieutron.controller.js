var DuLieuTron = require('../models/dulieutron.model');

exports.get_list_dulieutron = function(req, res){
   
    DuLieuTron.get_all(function(data){
        res.send({result: data})
    });

}

exports.detail = function(req, res){
   
    DuLieuTron.getByID(req.params.id, function(respnse){
        res.send({result: respnse});
    });
    
}


exports.add_dulieutron = function(req, res){
    var data = req.body;
    DuLieuTron.create(data, function(respnse){
        res.send({result: respnse});
    });
}
exports.remove_dulieutron = function(req, res){
    var id = req.params.id;
    DuLieuTron.remove(id, function(respnse){
        res.send({result: respnse});
    })
}

exports.update_dulieutron = function(req, res){
    var data = req.body;
    DuLieuTron.update(data, function(respse){
        res.send({result: respse});
    })
}