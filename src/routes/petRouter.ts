import express from 'express';
import PetController from '../controller/PetController';

const router = express.Router();

const petController = new PetController();
const t = () => {
  const k = [1, 2, 3];
};
router.post('/', petController.criaPet);

export default router;
