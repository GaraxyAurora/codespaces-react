import './App.css';
import React from "react";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [activeLink, setActiveLink] = React.useState("Filmy");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleNavbarLinkClick = (link) => {
    setActiveLink(link);
  };
  React.useEffect(() => {
    const filtered = data.filter(
      (dataElement) =>
        dataElement.Title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        dataElement.Type === activeLink
    );
    setFilteredMovies(filtered);
  }, [searchQuery, activeLink]);
  return (
    <BrowserRouter>
      <SearchBar onSearch={handleSearch} />
      <Navbar
        activeLink={activeLink}
        onNavbarLinkClick={handleNavbarLinkClick}
      />
      <Photogallery movies={filteredMovies} />
    </BrowserRouter>
  );
}

export default App;
