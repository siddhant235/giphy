import React, { useEffect, useState } from "react";
import { View,Image } from "react-native";
import { useGetTrendingGiphysQuery } from "../../../store/services/giphy";
import { FlatList } from "react-native";
import RenderGif from "../gif";
import Loader from "../../ui/activity-indicator";
import { styles } from "./styles";
const TrendingGifs = () => {
  const [offset, setPageOffset] = useState(0);
  const [gifs, setGifs] = useState([]);

  const trendingGifsQueryResult = useGetTrendingGiphysQuery({ offset });
  const queryResultData = trendingGifsQueryResult.data;
  useEffect(() => {
    if (
      !trendingGifsQueryResult.isFetching &&
      queryResultData &&
      queryResultData["data"]
    ) {

      let all = new Set([...gifs, ...queryResultData["data"]]);
      setGifs([...all]);
      console.log("hello");
    }
  }, [queryResultData, offset]);

  if (trendingGifsQueryResult.isLoading) {
    return <Loader />;
  }

  if (trendingGifsQueryResult.isError) {
    throw new Error("Something went wrong !");
  }

  const fetchMoreData = () => {
    const paginationData = trendingGifsQueryResult.data?.pagination;
    console.log("applying pagination", paginationData);
    if (offset <= paginationData.total_count) {
      setPageOffset((prevData) => prevData + 10);
    }
  };

  return (
    <View style={{ marginBottom: 400, height: "90%" }}>
      <FlatList
        data={gifs}
        numColumns={3}
        renderItem={(gifData) => (
          <RenderGif
            gifUrl={gifData.item.images.downsized_medium.url}
            height={gifData.item.images.downsized_medium.height}
            width={gifData.item.images.downsized_medium.width}
          />
        )}
        renderFooter={() => <Text>Loading ...</Text>}
        onEndReachedThreshold={0.1}
        onEndReached={fetchMoreData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TrendingGifs;
