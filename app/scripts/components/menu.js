import React, { useState } from "react";

function Menu() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  const showSearchContainer = (e) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  const onSearch = (e) => {};

  return (
    <div>
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div className={(isSearchOpen ? "showing " : "") + "search-container"}>
          <input type="text" onChange={(e) => onSearch(e)} />
          <a href="#" onClick={(e) => showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Menu;
