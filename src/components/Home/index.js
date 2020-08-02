import Home from "./Home";
import { connect } from "react-redux";

import { setCounter } from "../../actions/common";

const mapStateToProps = (state) => ({
  counter: state.common.counter,
});

const mapDispatchToProps = {
  setCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
