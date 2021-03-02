import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout'; 
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';


export default function uploadPage() {
    return ( 
     <div className="pageUpload-container">
   
        <style jsx global>
        {`

          .pageUpload-container{
            margin:0px;
          }
   
          .documentUpload{
            margin-top:0px;
            background: rgba(0, 0, 0, 0.1);
            max-width: 720px;   
            width:100%;
            height: 360px;
            border-radius: 12px;
            align-items: center;
            padding:0px -15px 0 5px;;

            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            display: grid;
            grid-template-areas: "pdfUpload elementsUpload";
            grid-column: "documentUpload";
            
            
          }

          .buttonUpload{
            width: 170px;
            margin-left: 110px;
          }

          .buttonUpload button
          {
            background-color:rgba(114, 235, 36, 0.8);
            min-width: 40px;
            color: black;
            border: none;
            border-radius: 7px;
            font-weight: bold;
            font-size: 17px;
            width: 170px;
            height: 55px;

            grid-area: "elementsUpload";
            
          }
          
          .elementsUpload .buttonUpload button:hover{
            background-color: rgba(91,189,28) ;
          }

          .pdfUpload{
            margin-left: 95px;
          }

          .pdfUpload img{
            grid-area: "pdfUpload";
          }

          .elementsUpload{
            margin-left: 100px;
          }

          .elementsUpload .textUpload{
            margin-left: 40px;
          }
   
          .elementsUpload .textUpload p {

            grid-area:"elementsUpload";
            text-align: center;
            font-size: 14px; 
          }
          
          @media only screen and (max-device-width: 900px) and (max-device-width: 400px) and (max-device-width: 1000px){{
            .documentUpload{
              width: 100%;
              grid-template-areas: "elementsUpload";
            }

          
        `}
        </style>
        {
          helloUser()
        }
        <div className="content">
          <section className="documentUpload">
            <div className="pdfUpload">
            <img src="images/pdfIcon.png" alt="Arquivo PDF"/> 
            </div>
          
            <div className="elementsUpload">
              <div className="buttonUpload">
                <button type="submit">Buscar</button>
              </div>
   
              <div className="textUpload">
                <p>O arquivo deve ter no máximo 5MB, <br/> no formato .pdf, .doc ou .docx.
                </p>
              </div> 
                
            </div>
            
          </section>
   
        </div>
   
     </div>
    )
}
   
export function helloUser(){
    return(
   
      <div className="helloUserUpload">
        <style jsx>
        {`
   
        .helloUserUpload p{
          font-size: 20rm;
          text-align: center;
          margin-top: -75px;
          margin-left: 100rm;
          line-height: 3.0;
          float: center;


   
        }
   
        .helloUserUpload b{
          font-size: 30px;
        }

        @media (max-width: 400px){
          .helloUserUpload{
            grid-template-areas: "helloUserUplaod";
            font-size: 15px;
            line-height: 1.0;
          }
          .helloUserUpload b{
            font-size: 22px;
          }
        }
        `}
      </style>
        <p>
          <b>Olá {}, pronto para assinar seus documentos?</b>
          <br/>
          Arraste até o local abaixo ou clique no botão de busca
        </p>
      </div>
   
    )
  }
      
  