import React from 'react';

  
export const showErrMsg=(msg)=>{
    

    return (
      <div className='alert alert-danger' role='alert'  style={{borderRadius:'8px',height:'50px'}}>
        {msg}
      </div>
    );
  }

  export const showSuccessMsg=(msg)=>{
    

    return (
      <div className='success alert-success' role='alert' style={{borderRadius:'8px', height:'50px'}}  >
        {msg}
      </div>
    );
  }

  