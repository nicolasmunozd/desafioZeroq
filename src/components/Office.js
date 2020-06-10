import React from 'react';


class Office extends React.Component{
    
    render(){
        if(this.props.online){
            return(
            
                <div className="box">
                    <div className="box__body">
                        <div className="box__body--title">{this.props.name}</div>
                    </div>
                    <div className="box__detail">
                        <div className="box__detail--waiting" >
                            <div><i className="far fa-user"></i></div>
                            <div>{this.props.waiting}</div>
                        </div>
                        <div className="box__detail--elapsed">
                            <div><i className="far fa-clock"></i></div>
                            <div>{this.props.elapsed}</div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
            
                <div className="box--disabled">
                    <div className="box__body">
                        <div className="box__body--title">{this.props.name}</div>
                    </div>
                    <div className="box__detail--disabled">
                        <div className="box__detail--waiting" >
                            <div><i className="far fa-user"></i></div>
                            <div>{this.props.waiting}</div>
                        </div>
                        <div className="box__detail--elapsed">
                            <div><i className="far fa-clock"></i></div>
                            <div>{this.props.elapsed}</div>
                        </div>
                    </div>
                </div>
            )
        }

        
    }
}

export default Office;  