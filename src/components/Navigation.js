import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AirlinesIcon from "@mui/icons-material/Airlines";

const Navigation = () => {
  return (
    <div className="navi">
      <Navbar bg="light" className="nav">
        <Navbar.Brand
          href="#home"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {" "}
          <AirlinesIcon
            style={{ marginLeft: "1.5rem", paddingTop: ".2rem" }}
          ></AirlinesIcon>
          <h4>FlyTrak</h4>
        </Navbar.Brand>{" "}
      </Navbar>
    </div>
  );
};

export default Navigation;
