import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Text from '@/components/uploadComponents/textUpload'
import Link from 'next/link';
import {FiArrowLeft} from'react-icons/fi'
import { useCurrentUser } from '@/hooks/index';
import {FaUserCircle} from'react-icons/fa'

export default function downloadDocument(){
    return(
        <div className="downloadPDF-container">
            <style jsx>
            {`
                .content{
                    background-color:rgba(0, 0, 0, 0.1);                  
                    border-radius: 12px;
                    height: 700px;
                    margin-top: -30px;
                    margin-bottom: 40px;
                           
                }

                .partsOfDocument{
                    padding-top: 20px;
                    padding-left: 445px;
                }

                .validatedDocument{
                    padding-left: 390px;
                    padding-top: 70px;
                }

                .validatedDocument h3{
                    padding-top: 10px;
                    text-align: center;
                    background-color: white;
                    border-radius: 35px;
                    max-width: 300px;
                    height: 60px;

                }
                .downloadButton{
                    width: 240px;
                    height: 200px;
                    margin-left: 432px;
                    padding-top: 20px;

                }

                .downloadButton button{
                    background-color:#2472EB;
                    min-width: 40px;
                    font-size: 17px;
                    border-radius: 25px;
    
                    height: 60px;
                  }
                    

                .assinantsOfDocument{
                    display: inline-block;
                    padding-left: 15px;
                }

                .infoDocument{
                    text-align: justify;
                    margin-left: 60px;
                    margin-top: 40px;
                }
                
                @media only screen and (max-device-width: 900px) and (max-device-width: 400px) and (max-device-width: 1000px){
                   
                    .content { width:100%; }
                    .validatedDocument { width:100%; }
                    .partsOfDocument { width:100%; }
                    .validatedDocument h3 { width:50%; }
                    .downloadButton button { width:100%; }
                    .assinantsOfDocument { width:100%; }
                    .infoDocument { width:100%; }         
               }
            `}
            </style>
            {
                backIcon()
            }
            {
                textTop()
            } 
            <div className="content">
                <section className="validDocument">
                    <div className="partsOfDocument">
                        <h3 className="title">Partes do documento</h3>

                        <div className="assinantsOfDocument">
                            <Link className="person-link" href="#">
                                <FaUserCircle size={35} color="black"/>
                            </Link>
                           <label htmlFor="#">Ainda não há assinantes</label>
                        </div>
                    </div>
                    <div className="validatedDocument">
                        <h3>Documento validado com sucesso!</h3>
                    </div>

                    <div className="infoDocument">
                        <h4>Nome do documento: {}</h4>
                        <h4>Assinatura iniciada em: {}</h4>
                        <h4>Assinatura finalizada em: {}</h4>
                        <h4>Hash: {}</h4>
                    </div>
                </section>

                <div className="downloadButton">
                    <button type="submit">Download do documento</button>
                </div>
                
            </div>
        </div>
    )
}

export function textTop(){
    return(
        
        <div className="textTop">
            <style jsx>
            {`
                .textTop{
                    padding-top: 1px;
                    margin-top: -60px;
                    margin-bottom: 70px;
                    color:black;
                }
                 @media (max-width: 400px){
                    .textTop h2{
                      grid-template-areas: "textTop";
                      font-size: 15px;
                    }
                  }
            `}        
            </style>
            <h2>Verificador de autenticidade</h2>
        </div>
    )

}

export function backIcon(){
    return(
  
        <div className="back">
            <style jsx>
            {`
                .back{
                  margin-top: -40px;
                }
  
                .back .back-link{
                  cursor: pointer;
                }
          
            `}
            </style>
            <Link className="back-link" href="/document/signed">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )
  
  }