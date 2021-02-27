import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Text from '@/components/uploadComponents/textUpload'
import BackIcon from '@/components/uploadComponents/backIcon'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';


export default function signedDocument(){
    return(
        <div className="signedDoc-container">
            <style jsx>
            {`
                 *{
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                }

                .signedDoc-container{
                    background-color:rgba(0, 0, 0, 0.1);
                    max-width: 1200px;
                    height: 720px;
                    border-radius: 12px;
                    margin: 0;

                    display: grid;
                    grid-template-areas: "pdfSignPreview downloadPDF";
                    grid-column: "signeDoc-container";

                 }

                .pdfSignPreview{
                  grid-area:"pdfSignPreview";
                }
                .downloadPDF p{
                    text-align: center;
                    font-size: 25px;
                    grid-area: ""downloadPDF;
                }

                @media (max-width: 560px){
                  .signedDoc-container{
                    grid-template-areas: "pdfSignPreview";
                  }
                }
            `}
            </style>
            {
                signedUser()
            }
            <section className="pdfSigned">
                <div className="pdfSignPreview">
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
    )
}

export function signedUser(){
    return(
   
      <div className="signedUser">
        <style jsx>
        {`
         .signedUser p{
            font-size: 20rm;
            text-align: center;
            margin-left: 100rm;
            line-height: 3.0;
            float: center;
  
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

  