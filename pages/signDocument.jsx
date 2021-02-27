import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Text from '@/components/uploadComponents/textUpload'
import BackIcon from '@/components/uploadComponents/backIcon'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function signDocument(){
    return(
        <div className="signDoc-container">
            <style jsx>
            {`
                *{
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                }

                .signDoc-container{
                  background-color:rgba(0, 0, 0, 0.1);
                  max-width: 1200px;
                  height: 720px;
                  border-radius: 12px;
                  margin: 0;

                  display: grid;
                  grid-template-areas: "pdfPreview signButton";
                  grid-column: "signDoc-container";
                  
                  position: fixed;
                  left: 40%;
                  right: -15%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                }

                .signButton button{
                    background-color:#2472EB;
                    font-size: 20px;
                    border-radius: 25px;
                    min-width: 40px;
                    width: 240px;
                    height: 50px;

                    grid-area:"signButton"; 
                }

                @media (max-width: 560px){
                  .signDoc-container{
                    grid-template-areas: "pdfPreview";
                  }
                }
            `}
            </style>
            {
                signUser()
            }
            <section className="docPreview">
                <div className="pdfPreview">
                    <h1>Preview</h1>
                </div>

                <div className="signButton">
                    <button type="submit">Assinar o documento</button>
                </div>
            </section> 
        </div>
        
    )
}

export function signUser(){
    return(
   
      <div className="signUser">
        <style jsx>
        {`
         .signUser p{
            font-size: 20rm;
            text-align: center;
            margin-left: 100rm;
            line-height: 3.0;
            float: center;
     
          }
     
          .signUser b{
            font-size: 30px;
          }

          @media (max-width: 400px){
            .signedUser{
              grid-template-areas: "signUser";
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
          <b>O documento {}, está pronto para ser assinado</b>
        </p>
      </div>
   
    )
  }

  