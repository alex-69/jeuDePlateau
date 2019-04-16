class Joueur{
  constructor(){
    this.Nom = null;
    this.force = 100;
    this.arme = null;
    this.deplacer = false;
    this.positionId = null;
    this.joueurTab = [
      {
        "id":0,
        "nom": "Luke",
        "force": this.force,
        "arme": this.arme,
        "deplacer": this.deplacer,
        "positionId": this.positionId,
      },
      {
        "id":1,
        "non":"Vador",
        "force":this.force,
        "arme": this.arme,
        "deplacer": this.deplacer,
        "positionId": this.positionId,
      }
    ]
  }

  RecupererNom(){
    return this.nom
  } 

  RecupererForce(){
    return this.force
  }

  RecupererArme(){
    return this.arme
  }

  recupererDeplacer(){
    return this.deplacer
  }

  RecupererPositionId(){
    return this.positionId
  }
  
  modifierNom(nom){
    this.nom = nom
  }

  modifierForce(force){
    this.force = force
  }

  modifierArme(arme){
    this.arme = arme
  }

  modifierDeplacer(deplacer){
    this.deplacer = deplacer
  }
  modifierPositionId(id){
    this.positionId = id
  }


  RecupererJoueurTab(){
  return this.joueurTab
  }

}

export{Joueur}