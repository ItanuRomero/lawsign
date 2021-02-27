import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';
import {FiArrowLeft} from'react-icons/fi'

export default function backIcon(){
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
            <Link className="back-link" href="upload">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )

}

