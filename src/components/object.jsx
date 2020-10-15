 function greet(){

    let greet={};
  //  let time=new Date();
let time=new Date(2018,9,9,12);
    time=time.getHours();

if(time<12)
{
  greet.wish="Good Morning";
  greet.color="green";
}else if(time<18)
{
  greet.wish="Good AfterNoon";
  greet.color="orange";
}else
{
  greet.wish="Good Night";
  greet.color="black";
}
    return greet;
}
export default greet;