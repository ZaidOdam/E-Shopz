import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
// import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import {useEffect, useMemo, useState} from 'react'
import {userRequest} from '../../requestMethods'

const Home = () => {

  const [userStats,setUserStats]=useState([]);

  const MONTHS=useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    []
  );
  
  useEffect(()=>{
    const getStats= async()=>{
      try{
        const res=await userRequest.get("/users/stats");
        const updatedStats=res.data.map(item=>({
          name: MONTHS[item._id-1],
          "Active User":item.total
        }));
        setUserStats(prev=>[...prev,...updatedStats]);
        // res.data.map(item=>{
        //   setUserStats(prev=>[
        //     ...prev,
        //     {name:MONTHS[item._id-1], "Active User": item.total}
        //   ]);
        // });
      }catch{

      }
    }
    getStats();
  },[MONTHS]);

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" dataKey="Active User" grid />
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home;
