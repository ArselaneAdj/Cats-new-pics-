import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function Maria() {

  function re(){
    window.location.reload();
  }
  return (
    <div className='s'>
      <img onClick={re} src="https://cataas.com/cat?width=500&height=500" alt="CAT"></img>
    </div>
  );
}

export default Maria;