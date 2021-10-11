import React from "react";
import Head from "next/head";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title || 'Foodology app'}</title>
                <meta name="description" content={`Foodology app. There ypu can buy some food.` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "food, "}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <NavBar/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout
