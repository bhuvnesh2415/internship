import './App.css';
import logo from './icon/logo.svg'
import innerbox from './icon/innerbox.svg'
function App() {
  return (
<>
<div>
  <div>
<img src={logo} alt='logo' className='logo'/>
  </div>
<div className='centraldiv'>
<img src={innerbox} alt='logo' className='innerbox'/>
<p  className='line1'>It’s a delight to have you onboard</p>
<p className='line2'>Help us know you better.<br>
</br>(This is how we optimize Wobot as per your business needs)</p>
<p className='line3'>Company name</p>
<input type="text" placeholder='e.g. Example Inc' className='box1'></input>
<p className='line4'>Industry</p>
<select className='box1'>
  <option value="bhu">select</option>
  <option value="bhu">laptop</option>
  <option value="bhu">books</option>
</select>

<p className='line4'>Company size</p>

<select name="work_days" className="time" multiple>
  <option value="1">1-20</option>
  <option value="2">21-50</option>
  <option value="3">51-200</option>
  <option value="4">201-500</option>
  <option value="5">500+</option>
</select>  
<div>
<button className='lastbutton'>Get Started</button>

</div>
</div>
<p className='last'>
Terms of use  |  Privacy policy 
</p>

</div>
</>
  );
}

export default App;
