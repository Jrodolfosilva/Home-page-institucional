import styled from "styled-components";

export const ContainerDifferences =  styled.section`
color:rgb(242, 102, 0);
padding: 50px 0;

`
export const DifferencesExemple = styled.section`
display: flex;
flex-wrap: wrap;
gap:30px;
justify-content: space-between;
padding:0 100px;

div{
    width: 350px;
    text-align: center;

    img{
        width: 120px;
    }
}


@media (max-width:450px) {
    padding: 20px 8px;
}
`
export const TitleDifferences = styled.h2`
background-color:rgb(242, 102, 0);
color:#e5e5e7;
height: 270px;
padding:50px;
text-align: center;
font-size: 36px;
margin-bottom: 50px;

span{
    display: block;
    font-weight:100;
    font-size:22px;
    margin-top: 30px;
}


@media (max-width:450px) {
    font-size:26px;
    padding: 8px;
    height: auto;

    span{
        font-size: 16px;
    }
}
`