
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Concepto from './componentes/Concepto'
import Tabla from './componentes/Tabla'
import Aprobado from './componentes/Aprobado';

class App extends React.Component {
  render(){
    return(
      <div>
        <div class="row">
        <div class="col-md-2" style={{width:120, height:120}} >
          <img src="https://hypernovalabs.hiringroom.com/data/accounts/hypernovalabs/microsite/53da3eccad4c7886684d879cffb17504.png" 
          style={{width:100, height:100}}></img>
        </div>
         <div class="col-md-16" style={{marginTop:45,width:450, height:80}}>
           <p style={{fontFamily:'Arial', fontSize: 35}}>
               REPORTE DE GASTOS
           </p>
         </div>
        </div>

        <Concepto>

        </Concepto>

        <Tabla>

        </Tabla>
        

     
        
      </div>
    )
  }
}

export default App;
