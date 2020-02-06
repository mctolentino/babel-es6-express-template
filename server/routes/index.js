import homeController from '../controllers/home-controller'
import express from "express"

const router = express.Router();

/* GET home page. */
router.get('/', homeController.get_home_page);
router.post('/', homeController.post_home_page);

module.exports = router;
