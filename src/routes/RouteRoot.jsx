import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import About from '../Pages/About';
import TechStack from "../Pages/TechStack";
import Contact from "../Pages/Contact";
import RootLayout from "../Layout/RootLayout";
import ContactLayout from "../Layout/ContactLayout";
import App from "../App";
import Error from '../components/common/Error';
import Detail from '../Pages/Detail';
import Faq from "../Pages/Faq";
import Help from "../Pages/Help";
import SendAMessage from '../Pages/SendAMessage';
import Products from '../Pages/Products';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="techstack" element={<TechStack />} />
            <Route path="sendamessage" element={<SendAMessage />} />
            <Route path="products" element={<Products />} />

            <Route path="contact" element={<ContactLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="help" element={<Help />} />
            </Route>

            <Route path="techstack/:userid" element={<Detail />} />
            <Route path="*" element={<Error />} />
        </Route>)
)

const RouteRoot = () => {
    return <RouterProvider router={Router} />
}

export default RouteRoot;