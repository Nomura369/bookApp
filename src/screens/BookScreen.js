import { Box } from "@gluestack-ui/themed";
import BookList from "../components/BookList";
import bookData from "../json/books.json";

const BookScreen = () => {
  return (
    <Box>
      <BookList 
        sections={bookData}
      />
    </Box>
  );
};

export default BookScreen;