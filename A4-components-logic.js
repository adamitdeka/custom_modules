//ASSIGNMENT 4 WEB COMPONENTS
//LOGIC FILE
//IN THIS FILE YOU WILL SIMPLY GRAB YOUR CUSTOM ELEMENT AND ATTACH YOUR METHOD FROM YOUR MODULE TO IT.
window.onload = ()=>{
    //the commented line doesn't work. 
    //humberClockNs.start;
    //when I tried to call the function using a listener then its working fine
    document.getElementById('template-container').onclick = humberClockNs.start;
};

