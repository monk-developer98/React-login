import axios from "axios";
import { React, useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(false);
  const [toggle, setToggle] = useState(false)

  useEffect(async() => {
    const formData = new FormData()
    formData.append('category','movies')
    formData.append('language','kannada')
    formData.append('genre','all')
    formData.append('sort','voting')

    var DATA = formData

    await axios.post('https://hoblist.com/api/movieList',DATA).then(res=>{
      // console.log(res.data.result);
      setData(res.data.result)
    }).catch(err=>{
      console.log(err);
    })
  }, []);

  console.log("data", data);

  const LogOut =()=>{
    localStorage.setItem('is_logged_in',false)
    window.location.href=('/')
  }
  return (
    <div className="HOME_PAGE">
      <div className="navbar">
        <h1><span class="material-icons-outlined">live_tv</span>Mov!es</h1>

        <div className="BTNS">
          <button onClick={()=>setToggle(!toggle)}>Company Info <span class="material-icons-outlined">{toggle?'close':'menu'}</span></button>

          <button onClick={LogOut}><span class="material-icons-outlined" style={{marginLeft:'0'}}>logout</span></button>
        </div>
       
        <div className="C_INFO" style={{display:toggle?'flex':'none'}}>
          <span>Company: <span>Geeksynergy Technologies Pvt Ltd</span></span>
          <span>Address: <span>Sanjayanagar, Bengaluru-56</span></span>
          <span>Phone: <span>XXXXXXXX09</span></span>
          <span>Email: <span>XXXXXX@gmail.com</span></span>
        </div>
        
      </div>
      <div className="M_container">
        {data?data.map((item,i)=>(
            <div className="M_card">
              <div className="primary">
                <div className="votes">
                  <div>
                    <span class="material-icons-outlined">arrow_drop_up</span>
                      <span>1</span>
                    <span class="material-icons-outlined">arrow_drop_down</span>
                  </div>
                  <span>Votes</span>
                </div>
                <div className="poster">
                <img src={item.poster} alt="" />
                </div>
                <div className="M_info">
                  <h3>{item.title.length>20?item.title.slice(0,20)+'...':item.title}</h3>

                  <span>Genre: <span style={{textTransform:'capitalize'}}>{item.genre}</span></span>
                  <span>Director: <span>{item.director.map(data=>(
                    <>
                      {data}
                    </>
                  ))}</span></span>
                  <span>Staring: <span>{item.stars.map(data=>(
                    <>
                      {data.length>20?data.slice(0,20)+'...':data}
                    </>
                  ))}</span></span>

                  <p className="mins">{item.runTime?item.runTime:'142'} Mins | {item.language} | {`${new Date(item.releasedDate*1000).toDateString().slice(4,20)}`}</p>
                  <p className="people">{item.pageViews} Views | Voted By {item.totalVoted} People</p>

                </div>
              </div>
              <button>
                Watch Trailer
              </button>
            </div>
        )):null}
       
      </div>
    </div>
  );
};

export default Home;
