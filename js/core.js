// Registar sadržaja. Svaki fajl u js/data/ poziva MED.register({...}) sa jednom oblašću.
window.MED = {
  categories: [],
  register(category) {
    this.categories.push(category);
  }
};
