import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import { Component} from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'a5e29738c06548b09c5d56dd8ffe6d2a'
 });

class App extends Component {
  constructor(){
    super();
    this.state ={
      input: '',
      imageUrl:'',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl:this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input).then(
        function(response) {
          console.log(response);
        },
        function(err){

        }
      );

  }
  render(){
  return (
    
    <div className="App">
     
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange = {this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}

export default App;
