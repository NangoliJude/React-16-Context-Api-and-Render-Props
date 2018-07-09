import React from 'react';
import Details from './Details';
import Names from './Names';
import { SectionWrapper, NameWrapper, DetailWrapper } from './UI';



const Main = (props)=>{
    return(
        <SectionWrapper>
        <NameWrapper>
             <Names/>
        </NameWrapper>
           <DetailWrapper>
               <Details render={({on,toggle})=>(
                       <div>
                           {on && <h1>Show Me</h1> }
                           <button onClick={toggle}>Show/Hide</button>
                       </div>
                   )
               }/>
           </DetailWrapper>
        </SectionWrapper>
    )
}

export default Main;