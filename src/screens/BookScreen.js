import { Box } from "@gluestack-ui/themed";
import BookList from "../components/BookList";
import popularData from "../json/popular.json";
import newestData from "../json/newest.json";

const BookScreen = ({ navigation }) => {
  return (
    <Box bg="#fff">
      <BookList popular={popularData} newest={newestData} navigation={navigation} />
    </Box>
  );
};

export default BookScreen;