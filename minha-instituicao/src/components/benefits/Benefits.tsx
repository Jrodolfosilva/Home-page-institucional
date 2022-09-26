import React, { useState } from "react";
import {ContainerBenefits,ContainerForms,ContainerMaps} from "./styled"


const Benefits = ()=>{

const [valueName,setValueName]= useState("")
const [valuePhone,setValuePhone]= useState("")

const sendEmail = (e:any)=>{
e.preventDefault()



}

    return(
        <ContainerBenefits>
        
            <ContainerForms>
                
                <form onSubmit={sendEmail}>
                <h2>Cadastre-se para receber<br/> nossas Promoções</h2>
                    <label htmlFor="name">
                        <input type="text" id="name"
                        placeholder="Digite seu nome"
                        onChange={({target})=>setValueName(target.value)}
                        value={valueName}
                        required
                        />
                    </label>
                    <label htmlFor="phone">
                        <input type="text" id="phone"
                        placeholder="(81) 9 9999-9999"
                        onChange={({target})=>setValuePhone(target.value)}
                        value={valuePhone}
                        required
                        />
                    </label>
                    <label htmlFor="send">
                        <input type="submit" id="send"
                        />
                    </label>
                </form>
            </ContainerForms>
            <ContainerMaps>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252837.3398741188!2d-35.07793755679123!3d-8.04180984840857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1664162320320!5m2!1spt-BR!2sbr" width="600" height="450"   loading="lazy">

            </iframe>
            </ContainerMaps>
        </ContainerBenefits>
    )
}

export default Benefits