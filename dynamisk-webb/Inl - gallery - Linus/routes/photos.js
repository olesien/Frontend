const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photo_controller");
const photoValidationRules = require("../validation/photo");

/* Get all resources */
// router.get('/', bookController.index);

// /* Get a specific resource */
// router.get('/:bookId', bookController.show);

// /* Store a new resource */
// router.post('/', bookValidationRules.createRules, bookController.store);

// /* Update a specific resource */
// router.put('/:bookId', bookValidationRules.updateRules, bookController.update);

// /* Destroy a specific resource */
// router.delete('/:bookId', bookController.destroy);

module.exports = router;
