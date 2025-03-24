import { Outlet, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/nav/NavBar'
import { WelcomePage } from '../pages/WelcomePage'
import { AllFabricsPage } from '../pages/AllFabricsPage'

export const UserViews = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }>


            <Route index element={<WelcomePage />} />
            
            <Route path='/fabrics' >
                <Route index element={<AllFabricsPage />} />

            </Route>

            </Route>
        </Routes>
    )
}