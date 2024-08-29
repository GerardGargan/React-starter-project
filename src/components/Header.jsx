import reactImage from '../assets/react-core-concepts.png';

const reactDescriptions = ['Core', 'Fundamental', 'Crucial'];

function generateRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  export default function Header() {
  var description = reactDescriptions[generateRandomInt(2)];
  
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }