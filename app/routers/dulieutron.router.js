
module.exports = function(router){
    
    var dulieutronController = require('../controllers/dulieutron.controller');
    
    router.get("/dulieutron/list", dulieutronController.get_list_dulieutron);

    router.get("/dulieutron/detail/:id", dulieutronController.detail);

    router.post("/dulieutron/add", dulieutronController.add_dulieutron);

    router.delete("/dulieutron/delete/:id", dulieutronController.remove_dulieutron);

    router.put("/dulieutron/update", dulieutronController.update_dulieutron);
}
