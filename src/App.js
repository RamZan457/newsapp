import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import from react-router-dom v6
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import Footer from "./components/Footer";
// import ErrorPage from "./components/ErrorPage";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  country = "in";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="general"
                  country={this.country}
                  category="general"
                  title="Top Headlines"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="business"
                  country={this.country}
                  category="business"
                  title="Business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="entertainment"
                  country={this.country}
                  category="entertainment"
                  title="Entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="general"
                  country={this.country}
                  category="general"
                  title="Top Headlines"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="health"
                  country={this.country}
                  category="health"
                  title="Health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="science"
                  country={this.country}
                  category="science"
                  title="Science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="sports"
                  country={this.country}
                  category="sports"
                  title="Sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  key="technology"
                  country={this.country}
                  category="technology"
                  title="Technology"
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
