import styled from "styled-components";

export const ContainerBanner = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap:40px;



`
export const BannerInfo = styled.div`


h2{
    font-size: 28px;
    margin: 10px 0;
}
p{
    font-size: 18px;
    margin: 10px 0;
}
button{
    display: block;
    margin: 16px auto;
    width: 280px;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color:rgb(242, 102, 0);
    color:#e5e5e7;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        background-color: #e5e5e7;
        color: rgb(242, 102, 0);
    }
}
figure{
    display: flex;
    margin: 14px 0;
    
}
;

`
export const BannerImg = styled.div`
width: 100%;
img{
    width: 300px;
}

`