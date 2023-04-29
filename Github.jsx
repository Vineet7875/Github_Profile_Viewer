import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import Users from "./Components/Users";
import ProfilePage from "./Components/ProfilePage"
function Github() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Users searchQuery={searchQuery} />
              </>
            }
          />
          <Route
            path="/ProfilePage/:first_name"
            element={
              <ProfilePage
              />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default Github;
