import React from "react";
import MainLayout from "../../layouts/MainLayout";
import TodayFeatured from "../../components/foods/TodayFeatured";


const FoodsPage = () => {
    return (
        <MainLayout>
            <TodayFeatured />
        </MainLayout>
    )
}

export default FoodsPage
