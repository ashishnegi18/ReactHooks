import { Link } from "react-router-dom";
import { useState } from "react";
import { Bs1Square } from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link
            to="/"
            onMouseEnter={() => setShowMenu(!showMenu)} onMouseOut={()=> setShowMenu(false)}
            style={styles.navLink}
          >
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Hook1" style={styles.navLink}>
            <Bs1Square />
            UseStateHook
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Hook2" style={styles.navLink}>
            UseEffectHook
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Form" style={styles.navLink}>
            Form
          </Link>
        </li>
      </ul>
      <div style={styles.authButtons}>
        <Link to="/login" style={styles.link}>
          <button style={styles.button}>LogIn</button>
        </Link>
        <Link to="/register" style={styles.link}>
          <button style={{ ...styles.button, ...styles.registerButton }}>
            Register
          </button>
        </Link>
      </div>
      {showMenu && (
        <div style={styles.centeredMenu}>
          {/* Content of the centered menu */}
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  authButtons: {
    display: "flex",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    padding: "8px 15px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    borderRadius: "5px",
  },
  registerButton: {
    backgroundColor: "#28a745", // Different background for Register
  },
  centeredMenu: {
    height: "170px",
    width: "300px",
    backgroundColor: "blue",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // This centers the div
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Navbar;
