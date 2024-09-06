// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      
        <div className="container main-cont">
          <div className="row">
            <div className="col">
              <div className="card card1">
                <div className="card-body card1-body">
                  <div class="custom-div" >
                      <button class="btn">About me</button>
                      <button class="btn">Experience</button>
                      <button class="btn">Recommend</button>
                  </div>
                  <div class="text-container">
                    <p>Hello! I'm Dave, your sales rep here from the Salesforce. I've been working at this
                      awesome comapny for 3 years now.
                    </p>
                    <p>I was born and raised in Albany,NY& have been living in Santa Carla for the past 10 years ny wife Tiffany
                      and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school,
                      so my calender is usually blocked between 9-10 AM. This is a....
                    </p>
                  </div>
 
                </div>
              </div>
              <hr className="custom-line"></hr>
              <div className="card card2">
                <div className="card-body card2-body">
                  <div>
                    <button className="btn ">Gallary</button>
                    <button className="btn custom-btn1">+Add image</button>
                    <button className="btn custom-btn2">
                    <i class="bi bi-arrow-left"></i>
                    </button>
                    <button className="btn custom-btn2">
                      <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>

                  <div className="col">
                  <img  className="custom-img1" src="https://t4.ftcdn.net/jpg/09/31/55/27/360_F_931552760_Zw0oFO8ZPsBYSJV5HsuCqOYXM0CBB0Xz.jpg"></img>
                  <img className="custom-img2" src="https://t4.ftcdn.net/jpg/09/31/55/27/360_F_931552760_Zw0oFO8ZPsBYSJV5HsuCqOYXM0CBB0Xz.jpg"></img>
                  <img className="custom-img3" src="https://t4.ftcdn.net/jpg/09/31/55/27/360_F_931552760_Zw0oFO8ZPsBYSJV5HsuCqOYXM0CBB0Xz.jpg"></img>



                  </div>

                </div>
              </div>
              <hr className="custom-line"></hr>

            </div>
          </div>
          
             

              
         

        </div>
        
      
      
      


    </>
    
  );
}

export default App;
