import {Visibility} from "@mui/icons-material";
import "./widgetSm.css";
import {userRequest} from "../../requestMethods";
import {useEffect, useState} from "react";

export default function WidgetSm() {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const getUsers=async()=>{
            try{
                const res= await userRequest.get("users/?new=true");
                setUsers(res.data);
            }catch{}
        };
        getUsers();
    },[])
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {users.map(user=>(

                <li className="widgetSmListItem" key={user._id}>
                    <img 
                        src={
                            user.img || 
                            "data:image/png;base64,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"
                        } 
                        alt="" 
                        className="widgetSmImg" 
                        />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>    
            ))}
              
        </ul>   
    </div>
  )
}
