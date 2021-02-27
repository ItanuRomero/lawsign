import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function uploadComponent(){
    return(
        <div className="upload-container">
            <style jsx>
            {`
                *{
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                }
                .upoload-container{
                    colunms-count: 1;
                    float: left;
                }
                .content{
                    background: rgba(0, 0, 0, 0.1);
                    max-width: 720px;
                    width:100%;
                    height: 360px;
                    border-radius: 12px;
                    align-items: center;

                    position: fixed;
                    left: 35%;
                    top: 50%;
                    transform: translate(-50%, -35%);

                    display: grid;
                    grid-template-areas: "pdfUpload textUpload";
                    grid-column: "content";
                }
                
                .elementsUploaded .pdfUploaded{
                    display: flex;
                    width: 50%;
                    margin-left: 110%;
                    image-size: 500px;
                    
                }

                .elementsUploaded .textUploaded{
                    font-size: 20px;
                    margin-top: 0px;
                    position: absolute;
                    right: 90px;
                    display: flex;
                    justify-content: right;
                }

                @media (max-width: 800px){
                    .content{
                      grid-template-areas: "pdfUpload";
                      position: fixed;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                    }
                  }

                @media (max-width: 800px){
                    .content{
                      grid-template-areas: "pdfUpload";
                      position: fixed;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                    }
                  }

            `}
                
            </style>
            <div className="content">
                <section className="elementsUploaded">

                    <div className="pdfUploaded">
                        <img src="#" alt="Arquivo PDF"/>
                    </div>
                    
                    <div className="textUploaded">
                        <p> Seu documento está sendo carregado</p>
                    </div>
               
                </section>
            </div>
        </div>
    )
}