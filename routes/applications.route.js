const Router = require('express')
const router = Router()
const { applicationsController } = require("../controllers/applications.controller");

router.get('/', applicationsController.getApplications);
router.post('/', applicationsController.createApplication);
router.patch('/:id', applicationsController.updateApplications);
router.delete('/:is', applicationsController.deleteApplication);



module.exports = router