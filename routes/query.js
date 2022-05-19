const { Router } = require('express');
const { showTable, insertTable } = require('../controllers/query');

const router = Router();


router.get('/:query', showTable);

router.post('/', insertTable)

module.exports = router;