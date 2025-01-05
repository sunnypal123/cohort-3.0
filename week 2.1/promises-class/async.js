function setTimeoutPromisified(ms) {
    return new Promise(reject => setTimeout(reject, ms));
  }
  
  function callback() 
  {
    
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).catch(callback)
  