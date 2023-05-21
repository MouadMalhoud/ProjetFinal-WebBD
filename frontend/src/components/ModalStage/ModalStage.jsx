import './ModalStage.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export default function ModalStage(props){
    const user = useSelector(state => state.utilisateur)
    const [studentOutput, changerStudentOutput] = useState(true)
    const [ employeurOutput, changerEmployeurOutput] = useState(false)
    const [etudiantAppliques, changerEtudiantAppliques] = useState([])
    const [fetchState, changerFetchState] = useState(false)


    useEffect(() => {
        if(fetchState){

        }else{   
            
            if(user.isStudent && props.etudiantApplique.includes(user.userID)){
                changerStudentOutput(false)
            }else if(!user.isStudent && user.userID == props.employeurID){
                changerEmployeurOutput(true)
                fetchEtudiants()
            }
            changerFetchState(true)
            
    }

        
    },[])
    
    async function deleteStage(){
        

        const res = await fetch(`https://finalproj-backend.onrender.com/creerstage/deletestage`,{
            method: 'POST',
            body: JSON.stringify(
            {
                stageID: props.stageID            
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload(true);
    }
    async function AppliquerStage(){
        const res = await fetch(`https://finalproj-backend.onrender.com/creerstage/appliquer`,{
            method: 'POST',
            body: JSON.stringify(
            {
                user: user.userID,
                stageID: props.stageID            
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload(true);

    }

    async function fetchEtudiants(){
        const res =await fetch(`https://finalproj-backend.onrender.com/creerstage/fetchetudiants`,{
            method: 'POST',
            body: JSON.stringify(
            {
                stageID: props.stageID,
                         
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await res.json()
        
        
        if(res.status == 408){
            changerEtudiantAppliques([])
        }else{
            changerEtudiantAppliques(response)
            
        }

    }

    if(!props.display){
        return null
    }
      

    if(user.isStudent){
        return(
            <>
            <div className='modal'>
                <div className='modal-content'>
                    <p>Enterprise: {props.nomEnterprise}</p>
                    <p>Nom d'employeur: {props.nomEmployeur}</p>
                    <p>Couriel: {props.adresseCouriel}</p>
                    <p>Numero Tel: {props.numTel}</p>
                    <p>Adresse Enterprise: {props.adresseEnterprise}</p>
                    <p>Position Disponible: {props.numDePosDispo}</p>
                    <p>Type du stage: {props.typeDeStage}</p>
                    <p>Description du role: {props.descriptionDuStage}</p> 
                    {studentOutput ? <button onClick={AppliquerStage}>Appliquer</button> : <h3>Vous avez deja appliquer a cette position</h3>}
                    <button onClick={props.onClose}>Fermer</button>
                </div>
                </div>
            </>
        )

    }else{
        return (
            <>
                <div className='modal'>
                    <div className='modal-content'>
                        <p>Enterprise: {props.nomEnterprise}</p>
                        <p>Nom d'employeur: {props.nomEmployeur}</p>
                        <p>Couriel: {props.adresseCouriel}</p>
                        <p>Numero Tel: {props.numTel}</p>
                        <p>Adresse Enterprise: {props.adresseEnterprise}</p>
                        <p>Position Disponible: {props.numDePosDispo}</p>
                        <p>Type du stage: {props.typeDeStage}</p>
                        <p>Description du role: {props.descriptionDuStage}</p>
                        
                        {employeurOutput ? <> <h3>List de Etudiant Appliquer</h3> <ul> {
                            
                            etudiantAppliques.map((etudiant) =>{
                                return(
                                    <li>
                                        {`${etudiant.numeroDA}, ${etudiant.nomComplet}, ${etudiant.couriel}`}
                                    </li>
                                    )
                        })} 
                        </ul> </>: <p></p>} 
                        {employeurOutput ? <button onClick={deleteStage}>Delete le stage</button> : <p></p>}
                        <button onClick={props.onClose}>Fermer</button>
                    </div>
                </div>
            </>
        )


    }
    return(<>

    </>)    
    
}