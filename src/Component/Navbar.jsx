import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Hook1" style={styles.navLink}>
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
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
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
};

export default Navbar;
