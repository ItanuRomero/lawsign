import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Text from '@/components/uploadComponents/textUpload'
import BackIcon from '@/components/uploadComponents/backIcon'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';
import {FaUserCircle} from'react-icons/fa'

export default function downloadDocument(){
    return(
        <div className="downloadPDF-container">
            <style jsx>
            {`
                @media only screen and (max-device-width: 900px) and (max-device-width: 400px) and (max-device-width: 1000px){
                    .downloadPDF-container{ width:100%; } 
                    .content { width:100%; }
                    .validatedDocument { width:100%; }
                    .partsOfDocument { width:100%; }
                    .validatedDocument h3 { width:50%; }
                    .downloadButton button { width:100%; }
                    .assinantsOfDocument { width:100%; }
                    .infoDocument { width:100%; }
               
               }
               .main{
                   margin-bottom: 15px;
               }
                .downloadPDF-container{
                    background-color:rgba(0, 0, 0, 0.1);                  
                    border-radius: 12px;
                    max-height: 671.85px;

                    
                }

                .content{
                    margin-top: 100px;
                    margin-bottom: 40px;
                    margin-left: 400px;
                    
                }

                .partsOfDocument{
                    margin-top:30px;
                }

                .validatedDocument h3{
                    text-align: center;
                    background-color: white;
                    border-radius: 35px;
                    padding-top:15px;
                    max-width: 300px;
                    height: 70px;

                }

                .downloadButton button{
                    background-color:#2472EB;
                    min-width:
                    font-size: 18px;
                    border-radius: 25px;

                    margin-top: 20px;

                    padding-top: 20px;
                    padding-bottom: 20px;
                    padding-left: 45px;
                    padding-right: 45px;
                }

                .assinantsOfDocument{
                    display: inline-block;
                    padding-left: 15px;
                }

                .infoDocument{
                    text-align: justify;
                }

                
                  }
            `}
            </style>
            {/* {
                textTop()
            } */}
            <div className="content">
                <main>
                <section className="validDocument">
                    <div className="partsOfDocument">
                        <h3>Partes do documento</h3>

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
                </main>
                

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