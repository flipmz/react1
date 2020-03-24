

import React, {Component} from "react";

import {MyCoolButton} from "../MyCoolButton";

class Comment extends Component {
    constructor(){
        super();

        this.state={
            publisher: '',
            comment: ''
        }
    }
    bichih = (e) => {
            this.setState({comment: e.target.value});
    }

    render(){
        return(
         <div>
            <div className="CoolText">{this.state.comment}</div>
            <div>Зохиогч: {this.props.zohiogch}</div>
            <textarea onChange={this.bichih}></textarea>
            <MyCoolButton 
                comment = {this.state.comment}
                tovchNer="Комментоо үнэнээр бич" 
                text="Сайн уу" />
         </div>
        );
    }

}

export default Comment;