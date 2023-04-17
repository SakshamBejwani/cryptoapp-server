import express from 'express'
const router = express.Router()

import {getSpecificCoinMetaData, getCoinMetaData, getCoinQuote, getGlobalStats} from '../controllers/coinmarket.js'

router.get('/listings/latest', getSpecificCoinMetaData);
router.get('/metaData/:coin', getCoinMetaData);
router.get('/quote/:coin', getCoinQuote);
router.get('/globalStats', getGlobalStats);


export default router