import React from "react";
import {ContainerDifferences,DifferencesExemple,TitleDifferences} from "./styled"

const Differences = ()=>{
    return(
        <ContainerDifferences>
           <TitleDifferences>
           Por que ter um programa de benefícios?
           <span>O Fidelicash ClubPetro é um diferencial para o seu Posto, onde você pode oferecer prêmios e descontos exclusivos para seus clientes, incentivando o retorno, a indicação de novos clientes e a fidelização.</span>
           </TitleDifferences>
           <DifferencesExemple>

            
            <div>
                <img src="https://d9hhrg4mnvzow.cloudfront.net/postos.clubpetro.com/programa-de-fidelidade/aeec7f17-haqobqftskoqtcvloqku-aumeto-ticket-medio.png"  alt="IMG" />
                <h2>Qualidade <br/> Garantida</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia facilis et</p>
            </div>
            <div>
                <img src="https://d9hhrg4mnvzow.cloudfront.net/postos.clubpetro.com/programa-de-fidelidade/800e8d24-wgypsjypqdqkdowtik1e-untitled-1.png" alt="IMG" />
                <h2>Qualidade <br/> Garantida</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia facilis et</p>
            </div>
            <div>
                <img src="https://d9hhrg4mnvzow.cloudfront.net/postos.clubpetro.com/programa-de-fidelidade/f9cc9402-sqckkbdaswebtu9bvww9-ducha.png" alt="IMG" />
                <h2>Qualidade <br/> Garantida</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia facilis et</p>
            </div>

           </DifferencesExemple>
        </ContainerDifferences>
    )
}

export default Differences