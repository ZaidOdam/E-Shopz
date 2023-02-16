import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home;
