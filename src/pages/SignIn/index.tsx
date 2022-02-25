import { FC } from "react"
import { Link } from "react-router-dom"
import { Box, Button, Container, Content, Input, Links, Span, Title } from "./styled"

export const SignIn: FC = () => {
    return(

    <Container>
        <Box>
            <Title>
                Bem Vindo
            </Title>
            <Content>
                <Span>Email</Span>
                <Input type='email' placeholder="Email" />
                <Span>Password</Span>
                <Input type='password' placeholder="Password" />
                <Button>Login</Button>
            </Content>
            <Links>
                <Link to={"/recuperar-senha"}> <Span>Esqueceu sua senha?</Span></Link>
                <Link to={"/cadastro"}> <Span>Não tem cadastro?</Span></Link>
            </Links>
        </Box>
    </Container>

    )
}