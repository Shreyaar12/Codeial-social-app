import React, { Component } from 'react';
import {connect} from 'react-redux';
class Settings extends Component {
    clnstructor (props){
        super(props):
        this.state={"name:'',value:'',password:'"}
    }
    render() {
        const {user} = this.props.auth;
        return (
            <div className="settings">
                <div className="img-container">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4185/4185461.png"
                  alt="user-dp"
            
                />
                </div>
                <div className="field">
                <div className="field-label">Email</div>
                <div className="field-value">{user.email}</div>
                </div>
                <div className="field">
                <div className="field-label">Name</div>
                <div className="field-value">{user.name}</div>
                </div>
            </div>
        );
    }
}
function mapStateToProps({auth})
{
    return {auth,
    };
}
export default connect(mapStateToProps)(Settings);