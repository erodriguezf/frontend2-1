import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Concepto extends React.Component{
    render(){
        return(
            <div>
            <div class="row">
            <div class="col-md-5">
            <p style={{fontFamily:'Arial', fontSize:17, marginLeft: 40}}> 
                <label for="exampleInputEmail1"> <strong>CONCEPTO: </strong>  </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft: 10}} ></input>
             </p>
            </div>
            <div class="col-md-2">
            <p style={{fontFamily:'Arial', fontSize:17, marginLeft: 10, marginRight: 50}}> 
                <label for="exampleInputEmail1"><strong>FECHA </strong>  </label>
                
             </p>
            </div>
            <div class="col-md-2">
            <p style={{fontFamily:'Arial', fontSize:17, marginLeft: -70}}> 
                 DESDE:
                <input type="date"  style={{width:170}}  ></input>
             </p>
            </div>
            <div class="col-md-2">
            <p style={{fontFamily:'Arial', fontSize:17, marginLeft: -50}}> 
                HASTA:
                <input type="date"  id="exampleInputEmail1" style={{width:170}} ></input>
             </p>
            </div>
           
            </div>
             <p style={{fontFamily:'Arial', fontSize:17}}>
                 <strong> INFORMACIÓN DEL EMPLEADO </strong>
             </p>
             <div class="row">
                 <div class="col-md-5">
                 <p style={{fontFamily:'Arial', fontSize:17, marginLeft: 65}}> 
                <label for="exampleInputEmail1"> NOMBRE:   </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft:10, width:300}} ></input>
                </p>
              </div>

              <div class="col-md-5">
                 <p style={{fontFamily:'Arial', fontSize:17, marginLeft: -30}}> 
                <label for="exampleInputEmail1"> POSICIÓN:   </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft:10, width:300}} ></input>
                </p>
              </div>

             </div>
             <div class="row">
             <div class="col-md-5">
                 <p style={{fontFamily:'Arial', fontSize:17}}> 
                <label for="exampleInputEmail1"> DEPARTAMENTO:   </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft:10, width:300}} ></input>
                </p>
              </div>

              <div class="col-md-5">
                 <p style={{fontFamily:'Arial', fontSize:17, marginLeft: -60}}> 
                <label for="exampleInputEmail1"> SUPERVISOR:   </label>
                     <input type="text"  id="exampleInputEmail1" style={{marginLeft:10, width:300}} ></input>
                </p>
              </div>

            </div>

           </div>
          
        )
    }
}

export default Concepto;