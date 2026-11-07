//Données du header: donne la liste des categories

import { Router } from 'express';
import { Categorie } from '../schemas/relations.js';

const router = Router();

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.findAll({ order: [['nom', 'ASC']] });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;
