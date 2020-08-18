import React,{useState} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

function SignIn(props){

   const history=useHistory();
    const [initial,setInitial]=useState({
        values: {
            email: "",
            password:""
     
      }    
    });

    const submit=e=>{
        e.preventDefault();
       
        props.dispatch({
         
            type:"SUBMIT-SIGN-UP",
            payload:initial.values
        });
        console.log('vaalues are',initial.values.email);
        
        if(initial.values.email==="Hari@gmail.com" && initial.values.password==="Hari1234")
        {
         history.push('/details')
        }
        else
        {initial.values.email="";
        initial.values.password="";
          history.push('/');
        
      }
  
    }

    
    
    const handleInputChange=e=>
        setInitial({
            values:{...initial.values,[e.target.name]: e.target.value}
        }
            
        );
    

    return(
      
        <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={submit}>
                            <h3 className="text-center text-dark">Login</h3>
                            <div className="form-group">
                                <label className="text-dark">Email:</label><br/>
                                <input type="text" name="email" id="email" className="form-control" value={initial.values.email}
     onChange={handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label className="text-dark">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control"value={initial.values.password}
     onChange={handleInputChange}/>
                            </div>
                            <div className="form-group">
                            <input type="submit" id="submit" name="submit" className="btn btn-primary btn-md" value="submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
}   

const mapStateToProps=(initial)=>{
  console.log('map to state values are',initial);
  return {
      props: initial
  }
};





export default  connect(mapStateToProps)(SignIn);