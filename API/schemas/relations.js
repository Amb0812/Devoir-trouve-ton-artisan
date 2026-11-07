import Categorie from "./categorie";
import Specialite from "./Specialite";
import Artisan from "./Artisan";

//Une catégorie contient plusieurs spécialités
Categorie.hasMany(Specialite, {foreignKey: 'id_categorie'});
Specialite.belongsTo(Categorie, {foreignKey: 'id_categorie'});

//Une specialités contient plusieurs artisans
Specialite.hasMany(Artisan, {foreignKey: 'id_specialite'});
Artisan.belongsTo(Specialite, {foreignKey: 'id_specialite'});

export {Categorie, Specialite, Artisan};