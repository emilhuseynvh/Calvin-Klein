import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../page/Home";
import PublicPage from "../layout/PublicPage";
import CreateAccount from "../page/CreateAccount";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<PublicPage />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/createaccount" element={<CreateAccount />} />
        </Route>
    )
);
