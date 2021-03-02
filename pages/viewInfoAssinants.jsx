import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Upload from '@/components/uploadComponents/uploadComponent'
import Text from '@/components/uploadComponents/textUpload'
import {FiArrowLeft} from'react-icons/fi'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function viewInfoAssinants(){
    return(
        <div className="viewInfoPage">
            {
                backIcon()
            }
            <Text/>
            <Upload/>
            <div className="content">
                <style jsx>
                {`
                    .content{
                        margin-top: -20%;
                        margin-left: 70%;
                    }

                    .signDoc{
                        width: 200px;
                        margin-left: 30%;
                        margin-top: 25%;
                    }

                    .signDoc button{
                        background-color:#2472EB;
                        min-width: 40px;
                        font-size: 15px;
                        border-radius: 25px;
                        height: 45px;
                    }
                `}
                </style>
                   
                   <form action="" className="formInfo">
                           <div className="nomeAssinant">
                               <input type="text" placeholder="Nome"/>
                           </div>
                           <div className="emailAssinant">
                               <input type="email" name="emailAssinant" id="emailAssinant" placeholder="E-mail"/>    
                           </div>
                   </form>

                   <div className="signDoc">
                   <button type="submit">Assinar o Documento</button>
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
            <Link className="back-link" href="isAssinant">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )

}