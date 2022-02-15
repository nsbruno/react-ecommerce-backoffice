import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'

const Routing: FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />}/>                    
            </Routes>
        </BrowserRouter>
    )
}

export default Routing