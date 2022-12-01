import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router();

router.get('/', PageController.home);
router.get('/fullParty', PageController.fullParty);
router.get('/stationary', PageController.stationary);
router.get('/lux', PageController.lux);
router.get('/kitkat', PageController.kitkat);
router.get('/special', PageController.special);

router.get('/search', SearchController.search)





export default router