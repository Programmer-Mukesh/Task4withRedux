import React from "react";
import { leftItems } from "../HeaderConstant";
import DropDown from "./DropDown";
import NavItem from "./NavItem";
import { show, hide } from "../../actions.js";
import { connect } from "react-redux";

const NavLeft = ({ hide, show, newState }) => {
  return (
    <div className="navLeft ul">
      <li className="navLinks">
        <a href="#" className="menuLeft radiusLeft">
          Children
        </a>
      </li>
      <li className="navLinks senior">
        <a
          href="#"
          className="menuLeft"
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          Seniors
        </a>
        {newState ? <DropDown /> : null}
      </li>
      <NavItem items={leftItems} classN="menuLeft ddAtag" />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    newState: state.value,
  };
};

const mapDispatchToProps = {
  hide: hide,
  show: show,
};

export default connect(mapStatetoProps, mapDispatchToProps)(NavLeft);
