import Img from "../images/px.jpg";
const Image=()=>{
    return(
        <>
        <div className="img-text"
       style={{padding:'40px 100px' , width:"300px"}} >
        <div className="img">
        <img src={Img}  style={{ height:"200px" , width:"300px" , margin:"auto"}} />
        </div>
<div className="text" style={{ textAlign:"center", fontSize:"12px"}}>
    <h1> Muscle cars</h1>
<p>Powerful engine: Muscle cars have engines typically V8 or larger and have more horsepower than most cars. High speed: 
    The powerful engine in a muscle car allows it to reach high speeds. While sports cars can safely speed through tight turns
    , muscle cars need to slow down while turning</p>
<br/>
<a href="https://google.com" style={{ textDecoration:"none " , background:"black",color:"white",fontWeight:"bold" , padding:" 10px 20px"}}>
    Readmore</a>
</div>
        </div>
        </>
    )
}
 export default Image ;
