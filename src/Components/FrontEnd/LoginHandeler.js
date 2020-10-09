import { render } from '@testing-library/react';
import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './LoginHandeler.css'
import fire from '../../firebase';
import axios from '../../axiosdata'



class loginhandeler extends Component{
    state = {
        email : " ",
        password : " ",
        newemail : "",
        newpassword : "",
        auth : false
    }

    handelChange = this.handelChange.bind(this);
    login = this.login.bind(this);
    register = this.register.bind(this)

    handelChange(e){
        e.preventDefault();
        this.setState({
        [e.target.name] : e.target.value
         })
        }

        login(e){
    
             fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password)
             .then(
                
             )
             .catch(error=>{
               this.setState({loading : false})
                 switch (error.code) {
                     case 'auth/email-already-in-use':
                       alert(`Email address ${this.state.email} already in use.`);
                       break;
                     case 'auth/invalid-email':
                       alert(`Email address ${this.state.email} is invalid.`);
                       break;
                     case 'auth/operation-not-allowed':
                       alert(`Error during sign up.`);
                       break;
                     case 'auth/weak-password':
                       alert('Password is not strong enough. Add additional characters including special characters and numbers.');
                       break;
                     default:
                       alert(error.message);
                   }
             })
         }

         register(e){
             e.preventDefault();
            const user = {
                email : this.state.newemail
            }

            axios.post("/users.json" , user)
            .catch((err) =>{
              console.log(err);
            })
            fire.auth().createUserWithEmailAndPassword(this.state.newemail , this.state.newpassword)
            .then(
                this.setState({
                    auth : true
                })
            )
            .catch(error=>{
                switch (error.code) {
                    case 'auth/email-already-in-use':
                      alert(`Email address ${this.state.email} already in use.`);
                      e.preventDefault();
                      break;
                    case 'auth/invalid-email':
                      alert(`Email address ${this.state.email} is invalid.`);
                      e.preventDefault();
                      break;
                    case 'auth/operation-not-allowed':
                      alert(`Error during sign up.`);
                      e.preventDefault();
                      break;
                    case 'auth/weak-password':
                        e.preventDefault()
                      console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
                       break;
                    default:
                      console.log(error.message);
                  }
            })
        }
    render(){
        return(
          


            <div className = "container">
                <h1>Welcome to our Theatre</h1>
             <form>
             <div className = "form-group row">
            <input type="email" class="form-control" name = "email" onChange={this.handelChange} value = {this.state.email} placeholder="Enter email"/>
            </div>
            <div className = "form-group row">
                <input type = "password" class = "form-control" name = "password" onChange = {this.handelChange} value = {this.state.password} placeholder = "Enter Password"></input>
            </div>
               </form>
               <NavLink  exact to ="/portal" button type="button" class="btn btn-primary btn-lg btn-block" onClick = {this.login} >
 Log In
</NavLink>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Sign Up
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
             <div className = "form-group row">
            <input type="email" class="form-control" name = "newemail" onChange={this.handelChange} value = {this.state.newemail} placeholder="Enter email"/>
            </div>
            <div className = "form-group row">
                <input type = "password" class = "form-control" name = "newpassword" onChange = {this.handelChange} value = {this.state.newpassword} placeholder = "Enter Password"></input>
            </div>
               </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick = {this.register}>Submit</button>
      </div>
    </div>
  </div>
</div>
            </div>
            

        )
    }
}


export default loginhandeler;