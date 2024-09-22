import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Layout } from "../components/layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export function Logout() {
    const navigate = useNavigate();
    const { user, handleLogout } = useAuth();

    useEffect(() => {
        if (user) {
            handleLogout();
        }
        navigate("/login");
    }, [navigate, user, handleLogout]);

    return (
        <Layout>
            <Header />
            <Main className="flex justify-center items-center">

            </Main>
            <Footer />

        </Layout>
    );
}