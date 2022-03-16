import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incplayer1, decplayer1, fetchUser } from "./actions";

const App = () => {
  const { playerone, playertwo, usersData } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  // Remove later
  console.log({ usersData });
  return (
    <div>
      {usersData.loading && <p>Loading...</p>}
      {usersData.users &&
        !usersData.loading &&
        usersData.users.map((v) => {
          return <p>{v.email}</p>;
        })}
      {usersData.error ? <p>{usersData.error}</p> : null}
      <center>
        <h3>Playerone details</h3>
        <p>
          Name:{playerone.name} | {""} Score: {playerone.score}
        </p>{" "}
        <br />
        <button onClick={() => dispatch(incplayer1())}>Increment</button>
        <button onClick={() => dispatch(decplayer1())}>Decrement</button>
        <h3>Playertwo details</h3>
        <p>
          Name:{playertwo.name} | {""} Score: {playertwo.score}
        </p>
      </center>
    </div>
  );
};

export default App;

// const mapStateToProps = (state) => ({
//   playerone: state.playerOne,
//   playertwo: state.playertwo,
// });
// export default connect(mapStateToProps, { incplayer1, decplayer1 })(App);
