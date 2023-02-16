import "./widgetLg.css";

export default function WidgetLg() {

    const Button=({type})=>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }

  return (
    
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser"> 
                    <img src="https://i.ibb.co/kSPqBcw/Screenshot-2021-0513-164500.png" alt="" className="widgetLgImg" />
                    <spam className="widgetLgName">Sayika Pirjade</spam>
                </td>
                <td className="widgetLgDate">21 Sept 2022</td>
                <td className="widgetLgAmount">500/-</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/kSPqBcw/Screenshot-2021-0513-164500.png" alt="" className="widgetLgImg" />
                    <spam className="widgetLgName">Sayika Pirjade</spam>
                </td>
                <td className="widgetLgDate">21 Sept 2022</td>
                <td className="widgetLgAmount">500/-</td>
                <td className="widgetLgStatus">
                    <Button type="Pending"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/kSPqBcw/Screenshot-2021-0513-164500.png" alt="" className="widgetLgImg" />
                    <spam className="widgetLgName">Sayika Pirjade</spam>
                </td>
                <td className="widgetLgDate">21 Sept 2022</td>
                <td className="widgetLgAmount">500/-</td>
                <td className="widgetLgStatus">
                    <Button type="Decline"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/kSPqBcw/Screenshot-2021-0513-164500.png" alt="" className="widgetLgImg" />
                    <spam className="widgetLgName">Sayika Pirjade</spam>
                </td>
                <td className="widgetLgDate">21 Sept 2022</td>
                <td className="widgetLgAmount">500/-</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
