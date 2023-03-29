import React from "react";
import "../styles/Infor.scss"

class Infor extends React.Component {
    render() {
        return (
            <div id="inFor">
                <div className="userInfor">
                    <div className="userText">
                        <div className="userName">Nguyễn Hoàng Minh</div>
                        <div className="userRole">Quản lí</div>
                    </div>
                    <div className="userImage">
                        <div className="circle"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Infor;