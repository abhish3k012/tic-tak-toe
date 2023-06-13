import React from "react";


const Square=(Props)=>{
    return(
        <div
        onClick={Props.onClick}
        style={{border:"2px solid",height:"100px",width:"40%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        }}
        className="Square">
            <h1>{Props.value}</h1>
        </div>
    );
};
export default Square;