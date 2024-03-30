/*書表統整*/
import { SectionList, FlatList, Text } from "@gluestack-ui/themed";

import PopularBook from "./PopularBook";
import NewestBook from "./NewestBook";

const BookList = ({ sections }) => {
  const renderSectionHeader = (title) => {
    <Text fontSize={24} fontWeight='500' mb={16}>{title}</Text>
  };
  
  const renderItem = ({ section }) => {
    if(section.title == "Popular Books"){
      return(
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <PopularBook book={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      );
    } 
    else if(section.title == "Newest"){
      return(
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <NewestBook book={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      );
    }
  };
    
  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={renderSectionHeader} // title樣式
      renderItem={renderItem} // data樣式
      keyExtractor={ item => item.title }
    />
  );
};

  export default BookList;