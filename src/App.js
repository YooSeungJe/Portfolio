import './App.css';
import pic from './port-pic.png'
import { GoLocation } from "react-icons/go";
import { IoWaterOutline, IoLogoGithub } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import 승제 from './증명사진.JPG'
import 고양 from './고양.png'
import 대엽 from './대엽.jpg'
function App() {
  return (
    <div className="App" style={{backgroundColor:'#fffef2'}}>
      <div class='container white-box profile'>
        <div class='row'>
          <div class='col-12 col-lg-9'>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img src={고양} alt="..." style={{width:'130px'}}/>
              </div>
              <div class="flex-grow-1 ms-5">
                <h4 style={{fontWeight:'700'}}>Yoo-Seung-Je</h4>
                <p>Front-end developer</p>
                <p style={{color:'rgba(0,0,0,.6)'}}><span style={{marginRight:'5px'}}><GoLocation/></span>서울특별시 강남구</p>
                <button type="button" class="btn" style={{color:'white', backgroundColor:'rgba(0,0,0,.6)'}}>Contact</button>
              </div>
            </div>
          </div>
          <div class='col-12 col-lg-3 right-profile'>
            <div class="row" style={{marginLeft:'30px'}}>
              <div class="col-6" style={{fontWeight:'700'}}> <p>Location</p> </div> 
              <div class="col-6"> <p>서울 근무</p> </div> 
              <div class="col-6" style={{fontWeight:'700'}}> <p>Age</p> </div> 
              <div class="col-6"> <p>만 25</p> </div>
              <div class="col-6" style={{fontWeight:'700'}}> <p>Experience</p> </div> 
              <div class="col-6"> <p>신입</p> </div>
              <div class="col-6" style={{fontWeight:'700'}}> <p>School</p> </div> 
              <div class="col-6"> <p>연세대(미래) <br/> 경영학부</p> </div>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <div className='line'>
          <h4 className='profile-border' style={{fontSize:'130%',fontWeight:'500',marginLeft:'18px'}}>Profile</h4>
        </div>
        <div className='blue-border'></div>
      </div>
      <div class='container' style={{marginTop:'20px'}}>
        <div class='row'>
        <div class="col-12 col-lg-3">
          <div class="white-box" style={{paddingBottom:'200px'}}>
            <h4>WORKS</h4>
            <p style={{marginTop:'20px'}}>
              <RxDotFilled/>Clock Page Designer<br/><br/>
              <RxDotFilled/>Portfolio Sharing Service<br/><br/>
              <RxDotFilled/>Shopping App Designer<br/><br/>
              <RxDotFilled/> Blog App Designer
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="white-box">
            <div col-12 className='about-box'>
              <h4>ABOUT</h4>
              <p className='about-des'>
                I am a front -end designer who is excellent at Bootstrap, Sass, Foundation.
                I have dealt lots of in-house design works and outsource things. If you want to check
                my portfolio, please visit my Github.
              </p>
            </div>
            <div col-12 style={{marginTop:'20px', marginBottom:'120px'}}>
              <h4>SKILLS</h4>
              <div col-12>
                <span class="pill">HTML</span>
                <span class="pill">JavaScript</span>
                <span class="pill">CSS</span>
                <span class="pill">React</span>
                <span class="pill">Node.js</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <div class="white-box" style={{textAlign:'center'}}>
            <h4 style={{fontSize:'100px',color:'rgba(0,0,0,.6)'}}><IoLogoGithub/></h4>
            <h4 style={{marginTop:'15px', fontWeight:'600'}}>Find me at Github</h4>
            <button type="button" class="btn" style={{color:'white', marginTop:'30px',marginBottom:'20px',backgroundColor:'rgba(0,0,0,.6)'}}>Go github</button>
          </div>
          <div class='col-12'>
            <h4 className='know-box'>People You Might Know</h4>
            <div className='know-under'></div>
          </div>
          <div class='row col-12' style={{marginTop:'-30px'}}>
            <div class='col-4'>
              <img src={대엽} width='85%' style={{borderRadius:'50%',marginLeft:'5px'}}/>
            </div>
            <div class='col-8'>
              <h4 style={{fontSize:'15px'}}>Bang Dae Yeop</h4>
              <p style={{fontSize:'12px'}}>Developer</p>
              <p style={{color:'rgba(0,0,0,.6)',fontSize:'12px',marginTop:'-10px'}}><span style={{marginRight:'5px'}}><GoLocation/></span>경기도 용인시</p>
            </div>
            <div class='col-4'>
              <img src={pic} width='100%'/>
            </div>
            <div class='col-8'>
              <h4 style={{fontSize:'15px'}}>Yang Eun Chae</h4>
              <p style={{fontSize:'12px'}}>Designer</p>
              <p style={{color:'rgba(0,0,0,.6)',fontSize:'12px',marginTop:'-10px'}}><span style={{marginRight:'5px'}}><GoLocation/></span>강원도 원주시</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
