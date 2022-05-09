import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import { Component} from 'react';

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
