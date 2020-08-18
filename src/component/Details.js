import React, { Component ,useState} from 'react'
import { connect } from 'react-redux';
import {getDetails} from '../reducer/index.js'



function Details({details,...props}){
   
console.log('the properties value',details);


    return(

         <div className="container1">
           <h1 className="text-dark"> Your mail id is: </h1>
            <h3 className="text-white"> {details.email}</h3>
         </div>
       
    )

};

const mapStateToProps = state => ({
    details: getDetails(state).values || {}
  });


export default connect(mapStateToProps)(Details);
