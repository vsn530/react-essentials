import "./App.css";
import { Card, CardWithoutJsx } from "./Card";
import { UserStatus } from "./UserStatus";
// import { UserProfile } from "./UserProfile";
// import { Greeting } from "./Greeting";
// import BasicForm from "./forms/BasicForm";
// import { Hello, HelloWithoutJsx } from "./Hello";

function App() {
  return (
    <div className="center">
      <UserStatus name="Srinivas" isOnline={true} />
      <UserStatus name="Kaushal" isOnline={false} />
      {/* <UserProfile>
        <p>Name: Bruce</p>
        <p>Age: 45</p>
      </UserProfile> */}
      {/* <Greeting />
      <Greeting message="Good Morning" />
      <Greeting name="Bruce" />
      <Greeting message="Good Morning" name="Jack" /> */}
      <h1>Code Evoulution React Course</h1>
      {/* <Greeting /> */}
      {/* <Button /> */}

      {/* Forms  */}
      {/* <BasicForm /> */}

      {/* <Hello />
      <HelloWithoutJsx /> */}
      <Card />
      <CardWithoutJsx />
    </div>
  );
}

export default App;
