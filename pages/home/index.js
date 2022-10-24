import React , {useState}from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import Taboptions from '../../components/common/taboption'
import Delivery from '../../components/delivery'
import Dining from '../../components/diningOut'
import NightLife from '../../components/nightLife'

const HomePage = () => {
    const [activeTab, setActiveTab]= useState("Delivery")
  return (
    <>
    <Header/>
    <Taboptions activeTab={activeTab} setActiveTab={setActiveTab}/>
    {getcorrectscreen(activeTab)}
    <Footer/>
    </>
  )
}

const getcorrectscreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <Dining/>
        case "Nightlife":
            return <NightLife/>
        default:
            return <Delivery/>
    }
}

export default HomePage