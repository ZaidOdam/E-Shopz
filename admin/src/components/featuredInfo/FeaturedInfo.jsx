import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
import "./featuredInfo.css";
import {useEffect, useState} from 'react';
import {userRequest} from '../../requestMethods';

const FeaturedInfo = () => {

    const [income,setIncome]=useState([]);
    const [perc,setPerc]=useState(0);

    useEffect(()=>{
        const getIncome=async()=>{
            try {
                const res=await userRequest.get("orders/income");
                setIncome(res.data);
                if (res.data.length > 1) {
                    setPerc((res.data[1].total*100)/res.data[0].total-100);
                }
            } catch {
                
            }
        }
        getIncome();
    },[]);
    // console.log(income);

  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                {income.length>1 ? (
                    <>
                        <span className="featuredMoney">${income[1].total}/-</span>
                        <span className="featuredMoneyRate">${Math.floor(perc)}%
                        {perc<0?(
                            <ArrowDownward className="featuredIcon negative"/>
                        ): (
                            <ArrowUpward className="featuredIcon"/>
                        )}
                        </span>
                    </>
                ):(
                    <span className='featuredMoney'>N/A</span>
                )}
            </div>
            <div className="featuredSub">compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">4,415/-</span>
                <span className="featuredMoneyRate">-1.4</span>
                <ArrowDownward className="featuredIcon negative"/>
            </div>
            <div className="featuredSub">compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2,225/-</span>
                <span className="featuredMoneyRate">+2.4</span>
                <ArrowUpward className="featuredIcon"/>
            </div>
            <div className="featuredSub">compared to last month</div>
        </div>
    </div>
  )
}

export default FeaturedInfo
