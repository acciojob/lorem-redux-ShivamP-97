import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLorem } from "../actions/loremActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchLorem();
  }

  render() {
    const { loading, data, error } = this.props;

    return (
      <div>
        {/* Do not remove the main div */}
        <h1>Lorem Redux App</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <p>
            <strong>{data.title}</strong>: {data.body}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.lorem.loading,
  data: state.lorem.data,
  error: state.lorem.error,
});

export default connect(mapStateToProps, { fetchLorem })(App);
