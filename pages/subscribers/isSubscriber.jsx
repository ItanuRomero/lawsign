import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Upload from '@/components/uploadComponents/uploadComponent';
import Text from '@/components/uploadComponents/textUpload'
import {FiArrowLeft} from 'react-icons/fi'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function isSubscriber(){
    return(
        <div className="assinantPage">
            
            <div className="assinant-container">
            <style jsx>
            {`
                .content{
                    max-width: 250vw;
                    justify: space-between;
                    margin-top: -30%;
                    margin-left: 70%;
                }
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
            `}
            </style>
            {
                backIcon()
            }
            <Text/>
            <Upload/>

            <div className="content">
                <form className="assinant">
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
                    <Link className="isAssinantConfirm" href="/subscribers/quantSubscribers">
                    <button type="submit">Pronto!</button>
                    </Link>
                </form>
            </div>
            
        </div>

        </div>
       
    )
}

export function backIcon(){
    return(

        <div className="back">
            <style jsx>
            {`
                .back{
                    margin-top:3%;
                  }
          
                  .back .back-link{
                    cursor: pointer;
                  }
          
            `}
            </style>
            <Link className="back-link" href="/upload">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )

}