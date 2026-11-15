import Categorie from "./Categorie.js";
import Specialite from "./Specialite.js";
import Artisan from "./Artisan.js";

//Une catégorie contient plusieurs spécialités
Categorie.hasMany(Specialite, {foreignKey: 'id_categorie'});
Specialite.belongsTo(Categorie, {foreignKey: 'id_categorie'});

//Une specialités contient plusieurs artisans
Specialite.hasMany(Artisan, {foreignKey: 'id_specialite'});
Artisan.belongsTo(Specialite, {foreignKey: 'id_specialite'});

export {Categorie, Specialite, Artisan};