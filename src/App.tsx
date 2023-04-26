import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import Person from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
function App() {
  const personName = {
    first : 'Noura',
    last: 'B'
  }

  const nameList = 
    [
      {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }

  ]

    return (
    <div className="App">
      <Container styles={{border: '1px solid black'}}/>
      {/* <Button handleClick={(event, id)=> console.log("button clicked", event, id)}/>
      <Input value='' handleChange={(event) => console.log(event)} /> */}
      {/* <Heading>Placeholder text</Heading>
      <Oscar><Heading>Hello</Heading></Oscar>
      <Greet name='Noura' isLoggedIn={false}/> */}
      {/* <Greet name='Noura' messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
      {/* <Status status= 'ssss'/> */}
    </div>
  );
}

export default App;
