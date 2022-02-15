import { FC } from "react"
import { Box, Button, Container, Content, Input, Span } from "./styled"

const SignIn: FC = () => {
    return(

    <Container>
        <Box>
            <h1>Bem Vindo</h1>
            <Content>
                <Span>Email</Span>
                <Input type='email' placeholder="Email" />
            </Content>
            <Content>    
                <Span>Password</Span>
                <Input type='text' placeholder="Password" />
            </Content>    
            <Content>
                <Button>Login</Button>
            </Content>
        </Box>
    </Container>

    )
}

export default SignIn