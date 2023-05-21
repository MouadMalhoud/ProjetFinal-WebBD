import './UnStage.css'
import ModalStage from '../ModalStage/ModalStage'
import { useState } from 'react'
 
function UnStage(props){
    const [montrerModal, changerStatutModal] = useState(false)

    function modalControl(){
        if(montrerModal === true){
            changerStatutModal(false)
        }else{
            changerStatutModal(true)
        }
    }

    return( 
            <div className='cartestage'> 
                <h2>Enterprise: {props.nomEnterprise}</h2>
                <h4>Nom de l'Employeur: {props.nomEmployeur}</h4>
                <p>Description: {props.descriptionDuStage}</p>
                <p>Type de stage: {props.typeDeStage}</p>
                <p>Position Disponible: {props.numDePosDispo}</p>
                <button onClick={modalControl}>Voir plus</button>
                <ModalStage display={montrerModal} 
                etudiantApplique={props.etudiantsApplique}
                nomEnterprise={props.nomEnterprise} 
                nomEmployeur={props.nomEmployeur}
                adresseCouriel={props.adresseCouriel}
                nomComplet={props.nomComplet}
                numTel={props.numTel}
                adresseEnterprise={props.adresseEnterprise}
                descriptionDuStage={props.descriptionDuStage}
                numDePosDispo={props.numDePosDispo}
                typeDeStage={props.typeDeStage}
                employeurID={props.employeurID}
                stageID={props.stageID}
                onClose={modalControl}
                 />
            </div>
        
    )
}

export default UnStage