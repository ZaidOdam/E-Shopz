import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2,415/-</span>
                <span className="featuredMoneyRate">-11.4
                    <ArrowDownward className="featuredIcon negative"/>
                </span>
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
