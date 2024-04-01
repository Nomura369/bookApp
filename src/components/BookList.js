/*書表統整*/
import { FlatList, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import PopularBook from "./PopularBook";
import NewestBook from "./NewestBook";

const BookList = ({ popular, newest, navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack ml={20} mt={8} mb={60}>
        <VStack mb={16}>
          <Text fontSize={24} fontWeight="500" color={colors.black} mb={16}>{popular.title}</Text>
          <FlatList
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={popular.data}
          renderItem={({ item }) => <PopularBook book={item} />}
          keyExtractor={ item => item.title }
        />
        </VStack>
        <VStack>
          <Text fontSize={24} fontWeight="500" color={colors.black} mb={16}>{newest.title}</Text>
          <FlatList
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={newest.data}
          renderItem={({ item }) => <NewestBook book={item} navigation={navigation} />}
          keyExtractor={ item => item.title }
        />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

  export default BookList;