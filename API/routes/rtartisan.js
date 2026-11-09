import { Router } from 'express';
import { Op } from 'sequelize';
import { Artisan, Specialite, Categorie } from '../schemas/relation.js';

const router = Router();

// Inclut la spécialité et sa catégorie dans chaque artisan
const inclureSpecialite = [{ model: Specialite, include: [Categorie] }];

// Liste des 3 artisans du mois 
// Cette route doit être placée AVANT "/:id", sinon "du-mois" serait lu comme un id
router.get('/mois', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: inclureSpecialite,
      limit: 3,
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Liste des artisans selon la catégorie/recherche 
router.get('/', async (req, res) => {
  try {
    const { categorie, recherche } = req.query;
    const where = {};

    // Recherche par nom 
    if (recherche) {
      where.nom = { [Op.like]: `%${String(recherche).slice(0, 100)}%` };
    }

    // Filtre par catégorie
    const filtreCategorie = categorie ? { nom: String(categorie) } : undefined;
    //Lancer la requête 
    const artisans = await Artisan.findAll({
      where,
      include: [{
        model: Specialite,
        required: true,
        include: [{ model: Categorie, required: true, where: filtreCategorie }],
      }],
      order: [['nom', 'ASC']],
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// La fiche d'un artisan
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ message: 'Identifiant incorrect' });
    }

export default router;
