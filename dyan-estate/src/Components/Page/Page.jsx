import Navbar from '../Navbar/Navbar';
import Page2 from '../Page2/Page2';
import './Page.css';

const Page = () => {
  function next(){
    <Page2/>
  }

  return (
    <main>
      <Navbar/>
        <section>
          <div className="heading">
            <h1>Sell or Rent your Property for Free</h1>
            <p>Whether you&apos;re ready to sell or looking for answers, we&apos;ll guide you with data and expertise specific to your needs.</p>
          </div>
          <div className="container">
            <div className="right">
              <h3>Upload your property in 4 simple steps</h3>
              <div className='check'> 
                <img src="/src/assets/check.png" alt="" />
                <h4>Add your property <span className='semibold'>Basic Details</span> </h4>  
              </div>
              <div className='check'> 
                <img src="/src/assets/check.png" alt="" />
                <h4>Add property <span className='semibold'>Location</span> </h4>  
              </div>
              <div className='check'> 
                <img src="/src/assets/check.png" alt="" />
                <h4>Add property <span className='semibold'>Features & Amenities</span> </h4>  
              </div>
              <div className='check'> 
                <img src="/src/assets/check.png" alt="" />
                <h4>Add <span className='semibold'>Price Details</span> </h4>  
              </div>
              <div className='check'> 
                <img src="/src/assets/check.png" alt="" />
                <h4>Add <span className='semibold'>Porperty Shots</span> </h4>  
              </div>
            </div>
            <div className="left">
              <h1 className='headline'>Lets get you started!</h1>
              <form action="">
                <label htmlFor="" className='label'><span className='star'>*</span>I am :</label>
                <div className='radio'>  
                  <div className='option'>
                    <input type="radio" required name="iam" id="iam" />
                    <label htmlFor="">Owner</label>
                  </div>
                  <div className='option'>
                    <input type="radio" required name="iam" id="iam" />
                    <label htmlFor="">Builder</label>
                  </div>
                </div>

                <label htmlFor="">Your Name <span className='star'>*</span></label>
                <br />
                <input type="text" name="" required id="" className='input' placeholder='Name'/>

                <label htmlFor="">Country <span className='star'>*</span></label>
                <br />
                <input type="text" required className='input' placeholder='Country'/>

                <label htmlFor="">Phone <span className='star'>*</span></label>
                <br />
                <div >
                  <button>+91</button>
                  <input type='tel' required name="" id=""  className='input phone'/>
                </div>

                <label htmlFor="">Email <span className='star'>*</span></label>
                <br />
                <input type="email" required className='input' placeholder='Email'/>
              </form>
                <div className='next'>
                  <h4><span>Need Help ?</span> Call 9999999999</h4>
                  <input type="submit" onClick={()=>{next()}} value="NEXT" />
                </div>
               
            </div>
          </div>
        </section>

    </main>
  )
}



export default Page