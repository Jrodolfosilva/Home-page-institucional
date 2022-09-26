import React from "react";
import Logo from "../../assets/logo.png"
import Postos from "../../assets/postonumero1.png"
import Clientes from "../../assets/postonumero2.png"
import {ContainerBanner,BannerInfo,BannerImg} from "./styled"
import ImagemPosto from "../../assets/banner-posto.png"
const Banner = ()=>{

    return(
        <ContainerBanner id="home">
            <BannerInfo>
                <img src={Logo} alt="Logomarca" />
                <h2>Fidelidade e Cashback em um só produto com a cara do seu Posto</h2>
                <p>O Fidelicash ClubPetro é único no mercado. Material personalizado com a sua marca para ter um Programa para chamar de seu. Ideal para Postos de Marca Própria e também para Postos Bandeirados, oferecendo vantagens reais para os seus clientes.</p>
                <button>Quero ter meu Fidelicash</button>

                <figure>
                    <img src={Postos} alt="+1200 postos" />
                    <img src={Clientes} alt="+6 milhoes de clientes" />
                </figure>

            </BannerInfo>
            <BannerImg>
                <img src={ImagemPosto} alt="imagem-postos" />
            </BannerImg>
        </ContainerBanner>
    )
}

export default Banner