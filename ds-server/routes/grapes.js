import express from 'express';

import {
    getPageJSON,
    storePageJSON,
} from '../controllers/Grapes.js'

const router = express.Router();

router.route('/page/:id')
    .get(getPageJSON)
    .post(storePageJSON)

export default router;
