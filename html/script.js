async function nouvelleCle() {
    let courriel01 = document.getElementById("courriel01").value;
    let mdp01 = document.getElementById("mdp01").value;
    let cle = document.getElementById("cle");

    let utilisateur = {
        courriel: courriel01,
        mot_de_passe: mdp01
    }

    let url = "https://two241013-patate01.onrender.com";

    const requete = await fetch(`${url}/tachesMemoire/utilisateurs/cle`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(utilisateur)
    })
    let reponse = await requete.json()

    if (requete.ok) {
        cle.innerHTML = `Clé api : ${reponse.cle}`
    }
    else {
        cle.innerHTML = `Clé api : ${reponse.message}`
    }
}

async function nouveauUtilisateur() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let courriel02 = document.getElementById("courriel02").value;
    let mdp02 = document.getElementById("mdp02").value;
    let message = document.getElementById("message2");
    let cle2 = document.getElementById("clee");

    let utilisateur = {
        nom: nom,
        prenom: prenom,
        courriel: courriel02,
        mot_de_passe: mdp02
    }
    let url = "https://two241013-patate01.onrender.com";
    console.log(utilisateur);
    let requete = await fetch(`${url}/tachesMemoire/utilisateurs/`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(utilisateur)
    })
    let reponse = await requete.json()
    if (requete.ok) {
        message.innerHTML = `Message : ${reponse.message}`;
        cle2.innerHTML = `Clé d'api : ${reponse.cle_api}`;
    }
    else {
        message.innerHTML = `Message : ${reponse.message}`;
    }

}
