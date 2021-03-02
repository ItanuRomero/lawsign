import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Text from '@/components/uploadComponents/textUpload'
import {FiArrowLeft} from'react-icons/fi'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';


export default function signedDocument(){
    return(
        <div className="signedDoc-container">
            <style jsx>
            {`
                 .content{
                  background-color:rgba(0, 0, 0, 0.1);
                  max-width: 1200px;
                  height: 720px;
                  border-radius: 12px;
                  margin: 0;
                  margin-top: -90px;
                 }

                .pdfSignedPreview{
                  width: 200px;
                  padding-top: 20%;
                  padding-left: 450px;
                 }

                .downloadPDF{
                  padding-top: 200px;
                  padding-left: 0;
                }

                .downloadPDF p{
                    text-align: center;
                    font-size: 23px;
                    // grid-area: "downloadPDF";
                }
                @media only screen and (max-device-width: 900px) and (max-device-width: 400px) and (max-device-width: 1000px){
                   
                  .content { width:100%; }
       
             }
            `}
            </style>   
            {
              backIcon()
            }

             {
                signedUser()
            }
            <div className="content">
              <section className="pdfSigned">
                  <div className="pdfSignedPreview">
                      <h1>Visualizar <br/> PDF</h1>
                  </div>

                  <div className="downloadPDF">
                      <p>Aguarde a assinatura dos demais assinantes.
                          <br/>
                          Você poderá baixar o documento clicando <a href="#">aqui</a>
                      </p>
                  </div>
              </section>
            </div>
            
        </div>
    )
}

export function signedUser(){
    return(
   
      <div className="signedUser">
        <style jsx>
        {`

        .signedUser{
          padding-top: 1px;
          margin-top: -90px;
          margin-bottom: 100px;

        }
         .signedUser p{
            line-height: 3.0;
            text-align: center;
            font-size: 20rm;
          }
     
          .signedUser b{
            font-size: 30px;
          }

          @media (max-width: 400px){
            .signedUser{
              grid-template-areas: "signedUser";
              font-size: 15px;
              line-height: 1.0;
            }
            .signedUser b{
              font-size: 22px;
            }
          }

        `}
      </style>
        <p>
          <b>O documento {}, foi assinado com sucesso!</b>
        </p>
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
            <Link className="back-link" href="signDocument">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )
  
  }

  