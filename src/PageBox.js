import React, {Component} from "react";
import "./Page-Box.css";

class PageBox extends Component {
    render() {
        return(
            <div className='page-box'>
                {this.props.children}
            </div>
        )
    }
}

export default PageBox;