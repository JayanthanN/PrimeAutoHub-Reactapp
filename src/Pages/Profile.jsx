import { useReducer, useContext } from "react";
import { CarContext } from "../context/CarContext";

const initialState = { likes: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "like":
      return { likes: state.likes + 1 };
    default:
      return state;
  }
}

function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const context = useContext(CarContext);

  if (!context) {
    return <h2>Context not found</h2>;
  }

  const { user } = context;

  return (
    <div className="profile-page">

      {/* 🔥 USER CARD */}
      <div className="profile-card">
        <div className="avatar">👤</div>

        <h2>Welcome {user}</h2>
        <p>Car Enthusiast 🚗🔥</p>

        <button onClick={() => dispatch({ type: "like" })}>
          Like Car ❤️
        </button>
      </div>

      {/* 🔥 STATS */}
      <div className="profile-stats">

        <div className="stat">
          <h3>{state.likes}</h3>
          <p>Liked Cars</p>
        </div>

        <div className="stat">
          <h3>12</h3>
          <p>Viewed Cars</p>
        </div>

        <div className="stat">
          <h3>5</h3>
          <p>Saved Cars</p>
        </div>

      </div>

      {/* 🔥 RECENT SECTION */}
      <div className="profile-section">
        <h2>Recent Cars</h2>

        <div className="recent-cars">
          <div className="car-box">🚗 Lamborghini</div>
          <div className="car-box">🚗 BMW M4</div>
          <div className="car-box">🚗 Audi R8</div>
        </div>
      </div>

    </div>
  );
}

export default Profile;