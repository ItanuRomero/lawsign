import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Upload from '@/components/uploadComponents/uploadComponent';
import Text from '@/components/uploadComponents/textUpload'
import BackIcon from '@/components/uploadComponents/backIcon'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function isAssinant(){
    return(
        <div className="assinant-container">
            <style jsx>
            {`
                *{
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                }

                .assinant-container{
                    display: grid;
                    grid-tamplate-areas: "yesAssinant noAssitant"
                    grid-column: assinant-container;

                    position: fixed;
                    left: 80%;
                    top: 55%;
                    transform: translate(-55%, -80%);
                }

                .yesAssinant{
                    grid-area: "yesAssinant";
                }

                .assinant button{
                    background-color:#2472EB;
                    font-size: 17px;
                    border-radius: 25px;

                    margin-top: 20px;
                    margin-left: 55px;

                    height: 38px;
                    width: 140px;

                }
                .assinant label{
                    cursor: pointer;
                    padding-bottom: 15px;
                    margin-left: -80px;
                    font-size: 20px;
                }

                .assinant p{
                    font-size: 25px;
                    text-align: center;
                }
                @media (max-width: 2580px){
                    .content{
                      grid-template-areas: "pdfUpload";
                      position: fixed;
                      left: 60%;
                      top: 55%;
                      transform: translate(-55%, -60%);
                    }
                  }
                @media (max-width: 1200px){
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
                      top: 10%;
                      transform: translate(-50%, -50%);
                    }
                  }

                @media (max-width: 560px){
                    .content{
                      grid-template-areas: "pdfUpload";
                    }
                }
            `}
            </style>

            <div className="content">
                <section className="assinant">
                    <p>Você será um assinante <br/> deste documento?</p>
                    <label className="yesAssinant">
                        <input type="radio"/>
                        <span className="checkmark"/>
                        Sim
                    </label>

                    <label className="noAssinant">
                        <input type="radio"/>
                        <span className="checkmark"></span>
                        Não
                    </label>
                    
                    <button type="submit">Pronto!</button>
                </section>
            </div>
            
        </div>
    )
}
