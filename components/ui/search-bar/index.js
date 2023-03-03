import React,{useState} from "react";
import { TextInput, View, Keyboard} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import SearchResultsGif from "../../views/search-results";
import { useDebounce } from "../../../hooks/useDebounce";
import { useSelector } from "react-redux";
import { THEME } from "../../../helpers/consts";

const SearchBar = ({clicked,setClicked}) => {
    const theme=useSelector((state)=>state.theme.mode)
    const backgroundColor=theme==THEME.LIGHT?styles.background_light:styles.background_dark
    const [searchPhrase,setSearchPhrase]=useState("")

    const searchValue=useDebounce(searchPhrase,500)
  return (
    <View style={{...backgroundColor}}>
    <View style={{...styles.container}}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={(newValue)=>{
            setSearchPhrase(newValue)
            if(newValue.length==0){
              setClicked(false)
              Keyboard.dismiss()
            }
          }}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
              Keyboard.dismiss();
              setClicked(false)
          }}/>
        )}
      </View>
        
    </View>
      {(searchValue.length>0 && searchPhrase==searchValue ) &&<SearchResultsGif searchParam={searchValue} />}
      </View>
  );
};
export default SearchBar;


