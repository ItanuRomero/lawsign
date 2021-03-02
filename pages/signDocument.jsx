import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Text from '@/components/uploadComponents/textUpload'
import {FiArrowLeft} from'react-icons/fi'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function signDocument(){
  return(
      <div className="signDoc-container">
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

               .pdfSignPreview{
                width: 200px;
                padding-top: 20%;
                padding-left: 450px;
               }

               .signDoc{
                width: 300px;
                padding-top: 200px;
                padding-left: 400px;
               }

              .signDoc button{
                background-color:#2472EB;
                min-width: 40px;
                font-size: 20px;
                border-radius: 25px;
                height: 60px;
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
              signUser()
          }
          <div className="content">
            <section className="pdfSign">
                <div className="pdfSignPreview">
                    <h1>Visualizar <br/> PDF</h1>
                </div>

                <div className="signDoc">
                   <button type="submit">Assinar o Documento</button>
                </div>
            </section>
          </div>
          
      </div>
  )
}

export function signUser(){
    return(
   
      <div className="signUser">
        <style jsx>
        {`

        .signUser{
          padding-top: 1px;
          margin-top: -90px;
          margin-bottom: 100px;
        }

         .signUser p{
            font-size: 20rm;
            text-align: center;
            line-height: 3.0;
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
          <Link className="back-link" href="viewInfoAssinants">
              <  FiArrowLeft size={40} color="#2472EB"/>
          </Link>
      </div>
  )

}