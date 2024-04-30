import express from "express";
import {
  createCrud,
  deleteCrud,
  getCrud,
  getCruds,
  updateCrud,
} from "../controllers/crudController.js";

const router = express.Router();

// router.route("/create").post(createCrud);
// router.route("/delete/:id").delete(deleteCrud);
// router.route("/get/:id").get(getCrud);

// router.route("/gets").get(getCruds);
// router.route("/update/:id").put(updateCrud);

router
  .route("/crud")
  .post(createCrud)
  .get(getCruds)
  
  router
  .route("/crud/:id")
  .get(getCrud)
  .put(updateCrud)
  .delete(deleteCrud);


export default router;
