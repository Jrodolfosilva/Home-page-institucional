import styled from "styled-components";

export const ContainerBenefits = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background-color: #e6e6e6;
padding: 100px 40px;
gap:40px;

@media (max-width:450px) {
    padding: 0px;
    gap:20px
}

`
export const ContainerForms = styled.section`
form{
    border-radius: 8px;
    border:1px solid #d1d1d1;
    padding: 50px 20px;

    h2{
        color:rgb(242, 102, 0);
    }
}
input{
    display: block;
    width: 400px;
    height: 40px;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    background-color: #fff;
    margin-top: 20px;
}
input[type="submit"]{
    background-color:#d2d2d2;
    cursor:pointer;

    &:hover{
        background-color: green;
        color:#fff;
    }
}

@media (max-width:450px) {
    form{
        width: 100vw;
        border: none;
        padding: 0px;
        text-align: center;
        h2{
            font-size: 22px;
        }
    }
    input{
        width: 90vw;
        margin: 20px auto;
    }
}

`

export const ContainerMaps = styled.section`
    iframe{
        border-radius: 8px;
        border:none;
        height: 350px;
        width: 450px;
    }

    @media (max-width:450px) {
    iframe{
        width: 90vw;
        margin-bottom: 40px;
    }
}

`