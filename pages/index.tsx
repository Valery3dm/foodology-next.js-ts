import React from "react";
import type { NextPage } from 'next'
import MainLayout from "../layouts/MainLayout";


import PerfectFoods from "../components/home/PerfectFoods";
import Commitment from "../components/home/Сommitment";
import Process from "../components/home/Process";
import CompleteSelection from "../components/home/CompleteSelection";
import Product from "../components/home/Product";
import Solutions from "../components/home/Solutions";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
        <PerfectFoods />
        <Commitment />
        <Process />
        <CompleteSelection />
        <Product />
        <Solutions />
    </MainLayout>
  )
}

export default HomePage
