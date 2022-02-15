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
    width: 400px;
    height: 500px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`

export const Span = styled.span`
    font-size: 14px;
    color: 'black';
    padding: 5px;
`

export const Input = styled.input`
    padding: 10px;
    font-size: 14px;
`

export const Button = styled.button`
    margin: 10px auto 0 auto;
    font-size: 14px;
    background: #41AEFE;
    border-color: #FFF;
    color: #FFF;
    width: 60%;
    padding: 8px;
    border-radius: 50px;
    
`
