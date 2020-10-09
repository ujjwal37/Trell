import React from 'react';


const Cards = (props) => {
    return(
        <React.Fragment>
        <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title"></h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.movieName}</h6>
    <p className="card-text">{props.Description}</p>
    <p  className="card-text">{props.Duration}</p>
    <p className="card-text">Another link</p>
  </div> 
</div>
</React.Fragment>
    )
}

export default Cards;