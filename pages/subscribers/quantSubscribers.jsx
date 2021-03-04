import React, { useReducer } from 'react';
import Head from 'next/head'
import Layout from '@/components/layout';
import Upload from '@/components/uploadComponents/uploadComponent';
import Text from '@/components/uploadComponents/textUpload'
import {FiArrowLeft} from'react-icons/fi'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/index';


export default function selectSubscribers(){
    return(
        <div className="quantityPage">
            
            <div className="selectItem">
                <style global jsx>
                {`
                * {
                    outline: 0;
                }

                span.msg,
                span.choose {
                    color: #red;
                    padding: 5px 0 10px;
                    display: inherit;
                    font-size: 25px;

                }
                .container {
                    width: 500px;
                    margin: 50px auto 0;
                    text-align: center;
                    margin-top: -25%;
                    margin-left: 65%;
                }
                .confirm {
                    background-color:#2472EB;
                    font-size: 17px;
                    border-radius: 25px;

                    margin-top: 20px;
                    margin-left: 55px;

                    height: 38px;
                    width: 140px;
                }
                /*Styling Selectbox*/
                .dropdown {
                    width: 300px;
                    display: inline-block;
                    background-color: #fff;
                    border-radius: 2px;
                    box-shadow: 0 0 2px rgb(204, 204, 204);
                    transition: all .5s ease;
                    position: relative;
                    font-size: 14px;
                    color: #474747;
                    height: 100%;
                    text-align: left;
                }
                .dropdown .select {
                    cursor: pointer;
                    display: block;
                    padding: 10px;
                }
                .dropdown .select > i {
                    font-size: 13px;
                    color: #888;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    float: right;
                    line-height: 20px;
                }
                .dropdown:hover {
                    box-shadow: 0 0 4px rgb(204, 204, 204);
                }
                .dropdown:active {
                    background-color: #f8f8f8;
                }
                .dropdown.active:hover,
                .dropdown.active {
                    box-shadow: 0 0 4px rgb(204, 204, 204);
                    border-radius: 2px 2px 0 0;
                    background-color: #f8f8f8;
                }
                .dropdown.active .select > i {
                    transform: rotate(-90deg);
                }
                .dropdown .dropdown-menu {
                    position: absolute;
                    background-color: #fff;
                    width: 100%;
                    left: 0;
                    margin-top: 1px;
                    box-shadow: 0 1px 2px rgb(204, 204, 204);
                    border-radius: 0 1px 2px 2px;
                    overflow: hidden;
                    display: none;
                    max-height: 144px;
                    overflow-y: auto;
                    z-index: 9;
                }
                .dropdown .dropdown-menu li {
                    padding: 10px;
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                } 
                .dropdown .dropdown-menu {
                    padding: 0;
                    list-style: none;
                }
                .dropdown .dropdown-menu li:hover {
                    background-color: #f2f2f2;
                }
                .dropdown .dropdown-menu li:active {
                    background-color: #e2e2e2;
                }
                
                button{
                    background-color:#2472EB;
                    font-size: 17px;
                    border-radius: 25px;

                    margin-top: 55px;
                    margin-left: 35%;

                    height: 38px;
                    width: 140px;
                }
                `}
                </style>
                {
                    backIcon()
                }
                <Text/>
                <Upload/>
                <div className="container">
                    <span className="choose">Quantas pessoas irão <br/> assinar o documento?</span>
                
                    <div className="dropdown">
                        <div className="select">
                        <span>Quantidade de assinantes</span>
                        <i className="fa fa-chevron-left"></i>
                        </div>
                        <input type="hidden" name="assinants"/>
                        <ul className="dropdown-menu">
                            <li id="one">1</li>
                            <li id="two">2</li>
                            <li id="three">3</li>
                            <li id="four">4</li>
                            <li id="five">5</li>
                            <li id="six">6</li>
                            <li id="seven">7</li>
                            <li id="eight">8</li>
                            <li id="nine">9</li>
                            <li id="ten">10</li>
                        </ul>
                    </div>
                <Link className="confirm" href="/subscribers/info">
                    <button type="submit">Pronto!</button>
                </Link>
                <span className="msg"></span>
                
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
            <Link className="back-link" href="/subscribers/isSubscriber">
                <  FiArrowLeft size={40} color="#2472EB"/>
            </Link>
        </div>
    )

}