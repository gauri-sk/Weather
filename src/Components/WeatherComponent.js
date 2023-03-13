import React,{useState,useEffect} from 'react'
import axios from 'axios'
import img from "../assets/mist.jpg"
function WeatherComponent() {
    const [posts,setPost]= useState([])
    useEffect(()=>{
        axios.get('http://api.weatherapi.com/v1/current.json?key=79f2da938184420cb15183245231003&q=Nagpur')
        .then(reponse=>{
            setPost(reponse.data)
            console.log(posts.location?.name)
        })
        .catch(error=>{
            console.log(error)
        })
        
    })
    console.log('img',img)
    let bg;
    



  return (
    <div>
        <script>
            
            if(document.getElementById(condition).innerHTML.equals("Mist")){
                // console.log("first")
                bg = 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        </script>
        <div class="hero min-h-screen" style={{backgroundImage: 'url("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}>
        
  <div class="hero-content text-center">
    <div class="max-w-md">
    <h4 class="text-3xl font-medium">{posts.location?.name}</h4>
    
      <h1 class="text-5xl font-bold">{posts.current?.temp_c}</h1>
      <img src={posts.current?.condition?.icon} style={{paddingLeft:"1rem"}}></img>
      <p class="py-6" id='condition' style={{fontWeight:"800", color:"white"}}>{posts.current?.condition?.text}</p>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default WeatherComponent