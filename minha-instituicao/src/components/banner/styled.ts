import styled from "styled-components";

export const ContainerBanner = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap:40px;
padding: 0 8px;


@media(min-width: 768px){
flex-wrap: nowrap;
justify-content: space-between;
padding: 50px 150px;
gap:100px;

}
`
export const BannerInfo = styled.div`
img{
    margin-top: 30px;
}

h2{
    font-size: 28px;
    margin: 30px 0;
    color:rgb(242, 102, 0) ;
}
p{
    font-size: 18px;
    color:#6e6e6e;;
 
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

    img{
        width:48%
    } 
}
;
@media (min-width: 768px){
    width: 30vw;
    
h2{ font-size: 34px;
    margin: 10px 0;
}
 

p{font-size: 18px;
    line-height: 23px;
}

button{
    display: block;
    width: 400px;
}
 figure{
gap:100px;

  img{
    width:150px;
    height: 80px;
    margin: -4px;
 }
}
}
;



`
export const BannerImg = styled.div`
width: 100%;
img{
    width: 300px;
}

@media (min-width: 768px) {
    img{
        width: 40vw;
    }
}

`