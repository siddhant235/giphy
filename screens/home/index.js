import React, { useState } from "react";
import { View } from "react-native";
import SearchBar from "../../components/ui/search-bar";
import SearchResultsGif from "../../components/views/search-results";
import TrendingGifs from "../../components/views/trending-gifs";

const Home = () => {

  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchBarClick = (isClicked) => {
    setSearchClicked(isClicked);
  };
  return (
    <View style={{flex:1,height:"100%",display:"flex"}}>

      <SearchBar
        clicked={searchClicked}
        setClicked={(isClicked) => handleSearchBarClick(isClicked)}
      />

    


          {!searchClicked && <TrendingGifs />}

    </View>
  );
};

export const homeScreenOptions = () => {
  return {
    headerTitle: "Giphys",
  };
};

export default Home;
