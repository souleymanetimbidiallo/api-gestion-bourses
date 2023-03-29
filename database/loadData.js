// fonction pour lire le fichier JSON et enregistrer les données dans la base de données
const loadData = (model, data) => {
    model.deleteMany();
    model.insertMany(data)
      .then(() => {
        console.log('Données importées avec succès');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'importation des données :', error);
      });
}

module.exports = loadData;
