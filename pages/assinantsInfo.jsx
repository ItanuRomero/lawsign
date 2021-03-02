import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Upload from '@/components/uploadComponents/uploadComponent'
import Text from '@/components/uploadComponents/textUpload'
import { BsFillPlusCircleFill } from "react-icons/bs";
import {FiArrowLeft} from'react-icons/fi'
import Link from 'next/link';
import './api/dropdown'
import { useCurrentUser } from '@/hooks/index';

export default function assinantsInfo(){
    return(
        <div className="infoPage">
            
            <div className="assinantsInfo-container">
                <style jsx>
                    {`
                        .content{
                            margin-top: -20%;
                            margin-left: 70%;
                        }

                        .buttons{
                            margin-top: 25%;
                            margin-left: 30%;
                        }

                        .buttons button{
                            background-color:#2472EB;
                            font-size: 17px;
                            border-radius: 25px;

                            padding-top: 5px;
                            margin-top: -38px;
                            margin-left: 55px;

                            height: 38px;
                            width: 140px;
                        }
                        @media only screen and (max-device-width: 800px) and (max-device-width: 400px) and (max-device-width: 1000px){
                        
                            .content{ 
                                width:100%;
                                margin-top: 200%;
                            }
                            .formInfo{ width: 100%;}
                        }

                        
                    `}
                </style>
                {
                    backIcon()
                }
                <Text/>
                <Upload/>

                <div className="content">
                   
                    <form action="" className="formInfo">
                            <div className="nomeAssinant">
                                <input type="text" placeholder="Nome"/>
                            </div>
                            <div className="emailAssinant">
                                <input type="email" name="emailAssinant" id="emailAssinant" placeholder="E-mail"/>    
                            </div>
                    </form>

                    <div className="buttons">
                        <Link className="plus-link" href="#">
                            < BsFillPlusCircleFill size={30} color="#2472EB"/>
                        </Link>

                        <button type="submit">Pronto!</button>
                    </div>

                    
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
            <Link className="back-link" href="quantityAssinants">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )

}