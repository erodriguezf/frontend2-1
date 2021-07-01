import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Aprobado extends React.Component{
    render(){
        return(
           <div>
              <p style={{fontFamily:'Arial', fontSize:17, marginLeft: 50}}>
                <strong>APROBADO</strong> 
              </p>
              <div style={{marginTop:-10}}>
              <p style={{fontFamily:'Arial', fontSize:17, marginLeft: 110}}> 
                <label for="exampleInputEmail1"> <strong>POR: </strong>  </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft: 1, width:520}} ></input>
              </p>
              </div>
              <div style={{marginTop:-10}}>
              <p style={{fontFamily:'Arial', fontSize:17, marginLeft: 100}}> 
                <label for="exampleInputEmail1"> <strong>FIRMA </strong>  </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft: 1, width:520}} ></input>
              </p>
              </div>
           </div>
          
        )
    }
}

export default Aprobado;