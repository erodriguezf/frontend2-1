import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aprobado from './Aprobado';

class Tabla extends React.Component{
    render(){
        return(
            <div class="table-responsive">
                <table class="table" style={{border: 'ridge orange 1px',width: 642, marginLeft:152 }}>
                        <tr style={{background:'orange'}}>
                          <td >
                             FECHA
                          </td>
                          <td >
                             CUENTA
                         </td>
                         <td >
                            DESCRIPCIÓN
                         </td>
                         <td >
                            TOTAL
                         </td>
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>

                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
                        <tr style={{backgroundColor:'white',border:'ridge orange 1px', height:40}}> 
                            <td style={{border:'ridge orange 1px'}}> 

                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                            <td style={{border:'ridge orange 1px'}}>
                                
                            </td>
                           
                        </tr>
        
                 </table>
                 <div class="row" >
                 <div class="col-md-4"> </div>
                 <div class="col-md-4 col-md-offset-4">
                     <p style={{fontFamily:'Arial', fontSize:17, marginLeft:-90}}>
                          MONTO A CANCELAR AL EMPLEADO
                     </p>
                 </div>
                 <div class="col-md-1" style={{backgroundColor:'orangered',marginLeft:-225, marginTop: -16, height:40}} >
                         
                        <p style={{marginLeft:20, marginTop:10}}><strong>$0,00</strong></p>
                 </div>

                 </div>
                 <Aprobado>
                     
                 </Aprobado>
            </div>
        )
    }
}

export default Tabla;