const Router = require('express')
const router = Router()
const { requestsController } = require("../controllers/requests.controller");

router.get('/', requestsController.getRequests);
router.post('/', requestsController.createRequest);
router.patch('/:id', requestsController.updateRequests);
router.delete('/:id', requestsController.deleteRequest);



module.exports = router