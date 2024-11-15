import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/clients/Dashboard'
import Message from '../pages/clients/Message'
import LayoutClinet from '../components/layouts/LayoutClinet'
import LayoutMessage from '../components/layouts/LayoutMessage'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<LayoutClinet/>}>
                <Route path="/lich-trinh" element={<Dashboard />} />
            </Route>
            <Route path='/tro-chuyen' element={<LayoutMessage/>}>
                <Route path="/tro-chuyen" element={<Message />} />
            </Route>
        </Routes>
    )
}

export default Router