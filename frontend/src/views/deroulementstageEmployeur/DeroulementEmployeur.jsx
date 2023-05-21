import './DeroulementEmployeur.css'
import { Footer } from '../../components'

export default function DeroulementEmployeur(){

    return(
        <>
        <div className='hero'>
            <h1>Deroulement Stagieres - Employeurs</h1>
        </div>
        <div className='container'>
        Formulaire d'inscription de milieu de stage
        Stages réguliers ayant lieu à la session hiver 
		Les stages sont du 21 janvier au 3 mai 2019 
		(il est toutefois possible après entente avec le coordonnateur de débuter le stage un peu plus tôt)
        Sur réception de ce formulaire, le coordonnateur des stages
          entrera en contact avec le responsable en entreprise pour discuter du stage.
		  
		  Veuillez vous référez à la page <a href='/profilscompetences'>Profil de sortie</a> pour connaître le profil de sortie et les compétences des étudiants.
        </div>
        <Footer />
        </>
    )
}