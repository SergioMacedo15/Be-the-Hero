import React , {useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';

import LogoImg from '../../assets/logo.svg'

export default function NewIncident() {


    const [titlle, settitlle] = useState('');
    const [description, setdescription] = useState('');
    const [value, setvalue] = useState('');
    const ongId = localStorage.getItem('ongId');
    
    const history= useHistory();


    async function handleCreatNewIncident(e) {
       
        e.preventDefault();
        
        const data ={
            titlle,
            description,
            value,
       };
           
       try{
           await api.post('incidents', data,{
               headers:{
                   Authorization: ongId,
               }
           })
           history.push('/profile');
       }catch(err){
           alert('Falha ao tentar Cadastrar novo Incidente')
       }
    }
    

    
    return (
        <div className='new-incident-container'>
            <div className='content'>

                <section>
                    <img src={LogoImg} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói que resolva isso</p>

                    <Link className="back-link" to="/Profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home
                </Link>
                </section>

                <form >

                    <input 
                    required
                    placeholder="Titulo do Caso"
                    value={titlle}
                    onChange= {e =>settitlle(e.target.value)}
                    />

                    <textarea 
                    required
                    placeholder="Descrição"
                    value={description}
                    onChange={e =>setdescription(e.target.value)}
                    />

                    <input 
                    required
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e =>setvalue(e.target.value)}
                    />

                    <button onClick= {handleCreatNewIncident} className="button" type="submit">Cadastrar</button>
                </form>

            </div>

        </div>
    );

}