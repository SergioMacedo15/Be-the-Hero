import React,{useState} from 'react';
import {Link,useHistory} from  'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'
import api from '../../services/api';

export default function Logon (){
    
    const [id,setid]= useState('');
    const history= useHistory();


    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});
            
            console.log(response.data.name);    

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            
            history.push('/Profile');
        }catch(err){
            
            alert('Falha no Login, Tente novamente');
        }

    }
    
    return(
        <div className="logon-conteiner">
            <section className="form">
                <img src={LogoImg} alt="Be The Heroe"/>
                
                <form onSubmit = {handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                    placeholder ="Sua ID"
                    value ={id}
                    onChange = {e => setid(e.target.value)}
                    />
                    
                    <button className="button" type = "submit">Entrar</button>
                    
                    <Link className = "back-link" to ="/register">
                        <FiLogIn  size ={16} color ="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>    

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );


}