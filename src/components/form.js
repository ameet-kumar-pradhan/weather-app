import React from 'react';
import '../assets/fomantic/dist/semantic.min.css';

const Form = props => (

   <form onSubmit={props.loadWeather} class="ui">
      <div>
         <div class="ui input">
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
         </div>

         <button class="ui primary button">
            Get Weather
      </button>
         <button class="ui button" type="reset">
            Reset
      </button>

      </div>


   </form >

)
export default Form;