import React from 'react';
import Office from './Office';


class Home extends React.Component{

    lineCalc = (elapsedOffice) =>{
        let second = 0;
        let minute =0;
        let hour = 0;

        hour = Math.floor(elapsedOffice/3600);
        if(hour>0){
            elapsedOffice -= hour*3600;
            minute = Math.floor(elapsedOffice/60);
        }else{
            hour=0;
            minute = Math.floor(elapsedOffice/60);
            
        }

        if(minute<10){
            minute = "0"+minute;
        }

        return hour +":"+minute
    }

    render(){
        return(
            <div className="boxs">
                {
                this.props.dataFilter.map((office) => {
                    
                    let lines = Object.keys(office.lines);
                    let waitingOffice = 0;
                    let elapsedOffice = 0;
                    
                    lines.map((line) =>{
                        waitingOffice +=office.lines[line].waiting;
                        elapsedOffice +=office.lines[line].elapsed;
                    })
                    elapsedOffice = Math.floor(elapsedOffice/lines.length);
                    
                    let elapsed = this.lineCalc(elapsedOffice);
                    // let elapsed = hour +":"+minute;
                    
                    return(<Office name={office.name} waiting={waitingOffice} elapsed={elapsed} online={office.online} key={office.name} />)
                 })}
               
               
            </div> 
        )
    }
}

export default Home;