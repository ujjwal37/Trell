import React , {Component} from 'react'
import {mo} from './movie.jpg'
import fire from '../../firebase';
import axios from '../../axiosdata'
import './Portal.css'

class Portal extends Component{

     state = {
         MovieName : "",
         Description : "",
         Direction : "",
         Duration  : "",
         ChooseMovie  : "",
         StartTime : "",
         EndTime : "",
         TicketPrice : "",
         NumberOfTickets: "",
         ChooseMovie2 : "",
         NumberTickets : "",
         ChoseTime : "",
         posts : "",
         data : "",
         mov : "",
     }


    handelChange = this.handelChange.bind(this);
    AddMovie = this.AddMovie.bind(this);
    AddTimming = this.AddTimming.bind(this);
    BuyTicket  = this.BuyTicket.bind(this);
 
    handelChange(e){
        e.preventDefault();
        this.setState({
        [e.target.name] : e.target.value
         })
        }

    AddMovie(){
      const Movies = {
          MovieName  : this.state.MovieName.toLowerCase(),
          Description : this.state.Description,
          Direction   : this.state.Direction,
          Duration  : this.state.Duration
      }

      axios.post("/movies.json" , Movies)
      .catch((err)=>{
          console.log(err)
      })
    }

    componentDidMount(){
        axios.get("/.json").then(response =>{
            var data = response.data
            var post  = Object.keys(data);
            var mov   = Object.keys(data.movies);
            this.setState({
                data : data,
                posts : post,
                mov : mov
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    AddTimming(){
        const AddTimming = {
            ChooseMovie : this.state.ChooseMovie,
            StartTime   : this.state.StartTime,
            EndTime     : this.state.EndTime,
            TicketPrice : this.state.TicketPrice,
            NumberOfTickets : this.state.NumberOfTickets
        }

        axios.post("/timmings.json" , AddTimming)
        .catch((err)=>{
            console.log(err);
        })
    }

    BuyTicket(){
        const BuyTicket = {
            ChooseMovie2 : this.state.ChooseMovie2,
            NumberTickets: this.state.NumberTickets,
            ChoseTime : this.state.ChoseTime
        }

        axios.post("/BuyTicket.json" , BuyTicket)
        .catch((err)=>{
          console.log(err);
        })
    
    }





  
    //we will create array list at starting i will fetch all movies data and check in arraylist if movie is present there then we cannot add movie of same name

    render(){
        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4">
                <div class="card st">
        <img className="card-img-top" src ="" alt="Card image cap"/>
           <div className = "card-body">
       <h5 className="card-title">Add movie</h5>
      <p className="card-text">Click on add button to add movies</p>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Movie</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
             <div className = "form-group row">
            <input type="text" class="form-control" name = "MovieName" onChange={this.handelChange} value = {this.state.MovieName} placeholder="Movie Name"/>
            </div>
            <div className = "form-group row">
            <input type="text" class="form-control" name = "Description" onChange={this.handelChange} value = {this.state.Description} placeholder="Description"/>
            </div>
            <div className = "form-group row">
            <input type="text" class="form-control" name = "Direction" onChange={this.handelChange} value = {this.state.Direction} placeholder="Direction"/>
            </div>
            <div className = "form-group row">
            <input type="text" class="form-control" name = "Duration" onChange={this.handelChange} value = {this.state.Duration} placeholder="Duration"/>
            </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick = {this.AddMovie}> Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
            </div>
            <div className = "col-md-4">
                <div class="card st">
        <img className="card-img-top" src="..." alt="Card image cap"/>
           <div className = "card-body">
       <h5 className="card-title">Add Timmings</h5>
      <p className="card-text">Click on add button to add timmings</p>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
  Add
</button>

<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Timmings</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
             <div className = "form-group row">
            <input type="text" class="form-control" name = "ChooseMovie" onChange={this.handelChange} value = {this.state.ChooseMovie} placeholder="ChooseMovie"/>
            </div>
            <div className = "form-group row">
            <input type="time" class="form-control" name = "StartTime" onChange={this.handelChange} value = {this.state.StartTime} placeholder="Start time"/>
            </div>
            <div className = "form-group row">
            <input type="time" class="form-control" name = "EndTime" onChange={this.handelChange} value = {this.state.EndTime} placeholder="End Time"/>
            </div>
            <div className = "form-group row">
            <input type="number" class="form-control" name = "TicketPrice" onChange={this.handelChange} value = {this.state.TicketPrice} placeholder="TicketPrice"/>
            </div>
            <div className = "form-group row">
            <input type="number" class="form-control" name = "NumberOfTickets" onChange={this.handelChange} value = {this.state.NumberOfTickets} placeholder="NumberOfTickets"/>
            </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick = {this.AddTimming}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
            </div>
            <div className = "col-md-4">
                <div class="card st">
        <img className="card-img-top" src="..." alt="Card image cap"/>
           <div className = "card-body">
       <h5 className="card-title">Buy Tickets</h5>
      <p className="card-text">Click on add button to Buy Tickets</p>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
  Buy
</button>

<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Buy Tickets</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
             <div className = "form-group row">
            <input type="text" class="form-control" name = "ChooseMovie2" onChange={this.handelChange} value = {this.state.ChooseMovie2} placeholder="Choose Movie"/>
            </div>
            <div className = "form-group row">
            <input type="time" class="form-control" name = "ChoseTime" onChange={this.handelChange} value = {this.state.ChoseTime} placeholder="ChoseTime"/>
            </div>
            <div className = "form-group row">
            <input type="number" class="form-control" name = "NumberTickets" onChange={this.handelChange} value = {this.state.NumberTickets} placeholder="NumberTickets"/>
            </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick = {this.BuyTicket}> Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
            </div>
            </div>
            </div>
        )
    }
}

export default Portal