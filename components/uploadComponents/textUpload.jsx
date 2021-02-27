import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';

export default function textUpload(){
    return(
      <div className="waitUser">
        <style jsx>
        {`
   
        .waitUser p{
          font-size: 20rm;
          margin-top: -73px;
          text-align: center;
          left: 50%;
          line-height: 3.0;
          float: center;
   
        }
   
        .waitUser b{
          font-size: 30px;
        }

        @media (max-width: 400px){
          .waitUser{
            grid-template-areas: "helloUserUplaod";
            font-size: 15px;
            line-height: 1.0;
          }
          .waitUser b{
            font-size: 22px;
          }
        }
        `}
      </style> 
        <p>
          <b>Já estamos quase lá, faltam apenas alguns passos!</b>
          <br/>
          Em alguns instantes será possível assinar seu documento de forma digital!
        </p>
        </div>
   
    )
  }