import React,{useState} from "react";
import Square from "./Square";
const Board=()=>{
    const[state,setState]=useState(["","","","","","","","",""]);
    const[Xturn,setXturn]=useState(true)
    const[player,setplayer]=useState("x")
    function checkwin(){
        const data=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i of data){
            const [a,b,c]=i;
            if(  state[a]===state[b] && state[a]===state[c]){
            console.log("won the match")
            return state[a]
        }
    }  
    return false  
    
    };
    const winner=checkwin();
   
    function handleClick(index){
    if(state[index]!==null){
        return
    }     
     const copyState=[...state]
     console.log("dfdfg",copyState)
     copyState[index]=Xturn ? "x":"o";
     setState(copyState)
     setXturn(!Xturn)
    // state.map((val,idx)=>{
    // alert(index)
    //     if(idx===index && val===""){
    //         return player
    //     }
    //     return val
    // })
    //  if (player==="x"){
    //     setplayer("o")
    //  }else{
    //     setplayer("x")
    //  }
     
     };
    function handlereset(){
//setState(Array(9).fill(null))
setState(["","","","","","","","",""])

    }
    //const winner=checkwin();
    return(
        <div className="board-container">
            {winner ? (
                <>{winner}:won the game <button onClick={handlereset}>play again</button></>
            ):(
            <>
            <h1>player {Xturn? "X":"O"}please move</h1>
            <div className="board-row">
                <Square onClick={()=> handleClick(0)} value={state[0]}/>
                <Square onClick={()=> handleClick(1)} value={state[1]}/>
                <Square onClick={()=> handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=> handleClick(3)} value={state[3]}/>
            <Square onClick={()=> handleClick(4)} value={state[4]}/>
            <Square onClick={()=> handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=> handleClick(6)} value={state[6]}/>
            <Square onClick={()=> handleClick(7)} value={state[7]}/>
            <Square onClick={()=> handleClick(8)} value={state[8]}/>
            </div>
            </>
    )}
        </div>
    );
};
export default Board;