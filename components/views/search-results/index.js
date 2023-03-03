import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useGiphySearchQuery } from "../../../store/services/giphy";
import { FlatList } from "react-native";
import RenderGif from "../gif";
import Loader from "../../ui/activity-indicator";
import { THEME } from "../../../helpers/consts";
import { styles } from "./styles";
import { useSelector } from "react-redux";
const SearchResultsGif = ({ searchParam }) => {
  const [offset, setPageOffset] = useState(0);
  const searchedGifsQueryResult = useGiphySearchQuery({ searchParam, offset });

  const [gifs, setGifs] = useState([]);
  const queryResultData = searchedGifsQueryResult.data;
  useEffect(() => {
    if (
      !searchedGifsQueryResult.isFetching &&
      queryResultData &&
      queryResultData["data"]
    ) {
      let all = new Set([...gifs, ...queryResultData["data"]]);
      setGifs([...all]);
      console.log("hello");
    }
  }, [queryResultData, offset]);
  const theme = useSelector((state) => state.theme.mode);

  if (searchedGifsQueryResult.isError) {
    throw new Error("Something went wrong !");
  }

  //this log is here to show that debounce works
  console.log("search result render");

  const backgroundStyle = theme == THEME.DARK ? styles.background_dark : styles.background_light;
 
  const fetchMoreData = () => {
    const paginationData = queryResultData?.pagination;

    if (offset <= paginationData?.total_count) {
      setPageOffset((prevData) => prevData + 10);
    }
  };
  return (
    <View style={{ ...backgroundStyle }}>
      <FlatList
        data={gifs}
        numColumns={3}
        ListEmptyComponent={() => <Loader />}
        renderItem={(gifData) => (
          <RenderGif
            gifUrl={gifData.item.images.downsized_medium.url}
            height={gifData.item.images.downsized_medium.height}
            width={gifData.item.images.downsized_medium.width}
          />
        )}
        onEndReachedThreshold={0.1}
        onEndReached={fetchMoreData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchResultsGif;
