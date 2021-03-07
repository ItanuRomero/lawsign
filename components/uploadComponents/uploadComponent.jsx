import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {FaFilePdf} from'react-icons/fa'
import { useCurrentUser } from '@/hooks/index';

export default function uploadComponent(){
    return(
        <div className="upload-container">
            <style jsx>
            {`
                *{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                    'Helvetica Neue', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                }
                .upoload-container{
                    colunms-count: 1;
                    float: left;
                }
                .content{

                    background-color:rgba(0, 0, 0, 0.1);
                    max-width: 720px;
                    width: 100%;
                    height: 360px;
                    border-radius: 12px;
                    margin: 0;
                    margin-top: 90px;
                }

                .elementsUploaded{
                    width: 400px;
                    margin-left: 200px;
                }
                
                .elementsUploaded .pdfUploaded{
                    display: flex;
                    width: 100%;
                    padding-top: 30%;
                    padding-left: 100px;
                }

                .elementsUploaded .textUploaded{
                    font-size: 20px;
                    margin-top: 0px;
                    width: 100%;
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
                        <Link className="pdf-link" href={`http://s3.amazonaws.com/doc/${encodeURIComponent('')}`}> {/* URL to the document */}
                            < FaFilePdf size={70} color="#2472EB"/>
                        </Link>
                    </div>
                    
                    <div className="textUploaded">
                        <p> Seu documento foi carregado!! </p>
                    </div>
               
                </section>
            </div>
        </div>
    )
}