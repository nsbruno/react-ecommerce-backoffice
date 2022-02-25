import styled from 'styled-components'

export const Container = styled.div`    
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
`

export const Box = styled.div`
    width: 390px;
    height: 550px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const Span = styled.span`
    font-size: 14px;
    color: 'black';
    padding: 5px;
`

export const Input = styled.input`
    padding: 10px;
    font-size: 14px;
    border-top: none;
    border-left:none;
    border-right:none;
    border-bottom-width: 0.5px;
    outline: 0;
`

export const Button = styled.button`
    margin: 50px auto 20px;  
    font-size: 14px;
    background: #41AEFE;
    border-color: #FFF;
    color: #FFF;
    width: 60%;
    padding: 8px;
    border-radius: 50px;
    
`

export const Title = styled.div`
    padding: 80px 0 60px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 600;
    font-size: 28px;
`
export const Links = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-end; 
    padding-top: 70px
`
