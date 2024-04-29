async function nouvelleCle() {
    let courriel01 = document.getElementById("courriel01").value;
    let mdp01 = document.getElementById("mdp01");
    let cle = document.getElementById("cle");

    let utilisateur = {
        courriel: `"${courriel01}"`,
        password: `"${mdp01}"`
    }

    let url = "https://two241013-patate01.onrender.com";

    const requete = await fetch(`${url}/tachesMemoire/utilisateurs/cle`, {
        method: 'GET',
            body: JSON.stringify(utilisateur)
        })
        .then(reponse => reponse.json())
        .then(data => {
            cle.innerHTML = data[0].cle;

        })

}

async function nouveauUtilisateur() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let courriel02 = document.getElementById("courriel02").value;
    let mdp02 = document.getElementById("mdp02");
    let message = document.getElementById("message")
    let cle2 = document.getElementById("cle2");

    let utilisateur = {
        nom : `"${nom}""`,
        prenom : `"${prenom}""`,
        courriel: `"${courriel02}"`,
        password: `"${mdp02}"`
    }

    let url = "https://two241013-patate01.onrender.com";

    const requete = await fetch(`${url}/tachesMemoire/utilisateurs/`, {
        method: 'POST',
            body: JSON.stringify(utilisateur)
        })
        .then(reponse => reponse.json())
        .then(data => {
            message.innerHTML = data[0].Message;
            cle2.innerHTML = data[0].cle_api;

        })

}