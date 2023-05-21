import { useState } from "react"
import { useNavigate } from "react-router-dom"
import validator from 'validator'
import './enregistrer.css'
import { Footer } from "../../components";

export default function Enregistrer(){
    const navigate = useNavigate();
    const [userChoix, changerUserChoix] = useState(null) // true est que c'est un etudiant false pour employeur
    const [statutCouriel, changerCouriel] = useState()
    const [statutMDP, changerMDP] = useState()
    const [formState, changerFormState] = useState("")
    

    const [etudiantInfo, changerEtudiantInfo] = useState({
        prenom: "",
        nom: "",
        password:"",
        numeroDA: "",
        adresseCouriel: "",
        profilDeSortie: Boolean, //TRUE reseaux securite : FALSE appli dev
    })
    const [employeurInfo, changerEmployeurInfo] = useState({
        prenom: "",
        nom: "",
        password:"",
        numTel: "",
        adresseCouriel: "",
        nomEnterprise: "", 
        adresseEnterprise: ""
    })

    function selectChangement(e){
 
        if(e.target.value === "true"){
            etudiantInfo.profilDeSortie = true
        }else if(e.target.value === "false"){
            etudiantInfo.profilDeSortie = false
        }
    }

    function courielValidation(e){
        if(userChoix){
            etudiantInfo.adresseCouriel = e.target.value

            if(validator.isEmail(etudiantInfo.adresseCouriel)){
                changerCouriel(true)
            }else{
                changerCouriel(false)
            }
        }else{
            employeurInfo.adresseCouriel = e.target.value

            if(validator.isEmail(employeurInfo.adresseCouriel)){
                changerCouriel(true)
            }else{
                changerCouriel(false)
            }
        }
    }

    function mdpValidation(e){
        if(userChoix){
            etudiantInfo.password = e.target.value

            if(etudiantInfo.password.length > 8){
                changerMDP(true)
            }else{
                changerMDP(false)
            }
        }else{
            employeurInfo.password = e.target.value

            if(employeurInfo.password.length > 8){
                changerMDP(true)
            }else{
                changerMDP(false)
            }
        }
    }

    function formValidation(){
        if(userChoix){
            if(etudiantInfo.password.length > 8 && validator.isEmail(etudiantInfo.adresseCouriel) && etudiantInfo.prenom.length > 1 && etudiantInfo.nom.length > 1 && etudiantInfo.numeroDA.length > 1){
                return true
            }else{
                return false
            }
        }else{
            if(validator.isEmail(employeurInfo.adresseCouriel) && employeurInfo.password.length > 8 && employeurInfo.prenom.length > 1 && employeurInfo.nom.length > 1 && employeurInfo.adresseEnterprise.length > 1 && employeurInfo.nomEnterprise && employeurInfo.numTel){
                return true
            }else{
                return false
            }
        }
    }

    async function formSubmit(e){
        e.preventDefault()
        const verifieForm = formValidation()
        if(verifieForm === false){
            changerFormState("Remplissez toute les critere")
            return
        }else{
            changerFormState("")
        }

        if(userChoix && statutMDP && statutCouriel){
            //this will do a post for an etudiant
            const res = await fetch(`${process.env.HOST}/enregistrement/etudiant`,{
                method: 'POST',
                body: JSON.stringify(etudiantInfo),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            })
            const response = await res.json()
       
            if(res.status === 409){
                changerFormState(response.message)
            }else{
                alert('le compte a été créé')
                navigate('/login')
            }
        }else if(userChoix === false && statutMDP && statutCouriel){
            //this will do a post for an employeur
            const res = await fetch(`${process.env.HOST}/enregistrement/employeur`,{
                method: 'POST',
                body: JSON.stringify(employeurInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const response = await res.json()

            if(res.status === 409){
                changerFormState(response.message)
            }else{
                alert('le compte a été créé')
                navigate('/login')
            }
            
        }
    }


    return(
        <>
            <div className="container">
            <div className="enregist-card">
                <form>
                    <input type="radio"  name="choixInscription" value="true"  onChange={() => changerUserChoix(true)}/>
                    <label >Etudiant</label>
                    <input type="radio" name="choixInscription"  value="false" onChange={() => changerUserChoix(false)}/>
                    <label >Employeur</label>
                </form> 

                {userChoix === null && <p>S.V.P Choisisez le type de compte que vous voulez</p>}    

                {userChoix && 
                
                <form className="form-info">
                <label>Prenom</label>
                <input type="text" name="prenom" placeholder="Jean" onChange={(e) => etudiantInfo.prenom = e.target.value}/>
                <br></br>
                <label>Nom</label>
                <input type="text" name="nom" placeholder="Tremblay" onChange={(e) => etudiantInfo.nom = e.target.value}/>
                <br></br>
                <label>Numero de DA</label>
                <input type="number" name="numeroDA" placeholder="12412311" onChange={(e) => etudiantInfo.numeroDA = e.target.value}/>
                <br></br>
                <label>Adresse Courriel</label>
                <input type="email" name="couriel" placeholder="jeantremblay@example.com" onChange={courielValidation}/>
                {statutCouriel ? <p className="verts">Votre courriel est valide</p> : <p className="rouge">Votre courriel est invalide</p>}
                <label>Mot de passe</label>
                <input type="password" name="mdp" placeholder="Mot de passe" onChange={mdpValidation}/>
                {statutMDP ? <p className="verts">Une bonne mot de passe!</p> : <p className="rouge">Votre mot de passe est pas assez forts</p>}

                <label>Profil de Sortie</label>
                <select name="sortie" onChange={(e) => selectChangement(e)}>
                    <option value="true" >Reseaux et securite</option>
                    <option value="false">Developement d'application</option>
                </select>        
                <br></br>
                <button onClick={formSubmit}>Enregistrer</button>
                </form>
                }

                {userChoix === false && 

                <form className="form-info">
                <label>Prenom</label>
                <input type="text" name="prenom" placeholder="Jean" onChange={(e) => employeurInfo.prenom = e.target.value}/>
                <br></br>
                <label>Nom</label>
                <input type="text" name="nom" placeholder="Tremblay" onChange={(e) => employeurInfo.nom = e.target.value}/>
                <br></br>
                <label>Numero Telephone</label>
                <input type="tel" name="tel" placeholder="8192775245" onChange={(e) => employeurInfo.numTel = e.target.value}/>
                <br></br>
                <label>Nom de vote enterprise</label>
                <input type="text" name="prenom" placeholder="Adobe" onChange={(e) => employeurInfo.nomEnterprise = e.target.value}/>
                <br></br>
                <label>Adresse de vote enterprise</label>
                <input type="text" name="adresseEnterprise" placeholder="25 Silicon Valley" onChange={(e) => employeurInfo.adresseEnterprise = e.target.value}/>
                <br></br>
                <label>Adresse Courriel</label>
                <input type="email" name="couriel" placeholder="jeantremblay@example.com" onChange={courielValidation}/>
                {statutCouriel ? <p className="verts">Votre courriel est valide</p> : <p className="rouge">Votre courriel est invalide</p>}
                <label>Mot de passe</label>
                <input type="password" name="mdp" placeholder="Mot de passe" onChange={mdpValidation}/>
                {statutMDP ? <p className="verts">Une bonne mot de passe!</p> : <p className="rouge">Votre mot de passe est pas assez forts</p>}
                <br></br>
                <button onClick={formSubmit}>Enregistrer</button>
                </form>
                
                } 
                {formState}
            </div>
            <div className="error-card" >

            </div>
            </div>
            <Footer />
            
        </>
    )
}