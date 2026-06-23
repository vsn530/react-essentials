export const UserStatus = ({ name, isOnline }) => {
  // if else
  if (isOnline) {
    return (
      <div>
        <h2>{name}</h2>
        <p>🟢Available</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>Not available</p>
    </div>
  );
  //   // ternary operator
  //   return (
  //     <div>
  //       <h2>{name}</h2>
  //       <p>{isOnline ? "🟢Available" : " Not Available"}</p>
  //     </div>
  //   );
};
