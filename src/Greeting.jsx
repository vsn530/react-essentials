export const Greeting = ({ message = "Hello", name = "Guest" }) => {
  return (
    <div>
      <h1>
        {message}, {name} !
      </h1>
    </div>
  );
};
