import LogoMomo from '../../assets/collegepng.png'
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux' 
import { resetState } from '../../GlobalState/UtilisateurConnecte'



export default function Navbar(){
    const user = useSelector(state => state.utilisateur)
    const dispatch = useDispatch()

    function logOut(){
        dispatch(resetState())
        localStorage.removeItem('persist:main-root')
    }



    return(
        <>
            <nav className='nav'>
            <a href='/'><img src={LogoMomo} width={50}/></a>

            <div className='nav-items'>
                <a href='/'>Accueil</a>
                <a href='/profilscompetences'>Profils et competences des stagiaires</a>
                <a href='/faq'>FAQ</a>

                {
                    //Add here Deroulement Stagieres pour les etudiants
                    user.isStudent && <a href='/deroulementstage'>Deroulement Stagieres</a>
                }
                {
                    //Add here Deroulement Stagieres pour les employeur
                    user.isStudent === false && <a href='/deroulementstageemployeur'>Deroulement Stagieres</a>
                }
                {
                    //Add here Ajouter un stage pour les employeur
                    user.isStudent === false && <a href='/creerstage'>Creer un Stage</a>
                }
                {
                    //Add here voir les stages disponible pour les etudiants et les employeurs voir avec moad
                    user.userisLoggedIn && <a href='/stagesdispo'>Stages Disponible</a>
                }
                

            </div>
            
            { user.userisLoggedIn ?
                
            <div className='nav-items'>
                <a onClick={logOut}>Logout</a>
            </div> 
            :
            <div className='nav-items'>
                <a href='/login'>Login</a>
                <a href='/enregistrement'>Enregistrer</a>
            </div> 
            }

            </nav>
        </>
    )

}