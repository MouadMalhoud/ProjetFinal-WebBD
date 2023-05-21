import { Footer } from '../../components'
import './FAQ.css'

export default function FAQ(){

    return(
        <>
        <div className='hero'><h1>Foire aux questions - FAQ</h1></div>
            <div className='container'>
                
                <div className='questionsBox'>
                    <h1>Les Questions</h1>
                    <div className='qaBox'>
                        <h3>Est-ce que le stage est obligatoire?</h3>
                        <p>Le stage de fin d'études en informatique est obligatoire pour l'obtention du diplôme collgégial. </p>
                    </div>
                    <div className='qaBox'>
                        <h3>Quel est l'horaire de l'étudiant durant les stages?</h3>
                        <p>L'étudiant doit respecter l'horaire de l'entreprise durant son stage.</p>
                    </div>
                    <div className='qaBox'>
                        <h3>Est-ce que l'étudiant travaille pendant les journées pédagogiques et les journées de rattrapage?</h3>
                        <p>L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même durant les journées pédagogiques et de rattrapage.</p>
                    </div>
                    <div className='qaBox'>
                        <h3>Quelle est la durée d'un stage de fin d'études?</h3>
                        <p>La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation).</p>
                    </div>
                    <div className='qaBox'>
                        <h3>Quelles sont les dates prévues pour les stages?</h3>
                        <p>Les stages sont prévus du 21 janvier au 3 mai 2019.</p>
                    </div>                   
                </div>

            </div>
            <Footer />
        </>
    )
}