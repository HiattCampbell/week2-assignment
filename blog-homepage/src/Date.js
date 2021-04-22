import React, { Component } from 'react';
import Moment from 'moment';


class Date extends Component {
  
render(){
    Moment.locale('en');
    return(
    <div> 
      {Moment(this.props.article.postedDate).format('MMM d')} 
    </div>) 
}
}

export default Date;