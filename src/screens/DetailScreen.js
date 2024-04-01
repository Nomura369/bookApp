import { Box } from "@gluestack-ui/themed";

import BookDetail from "../components/BookDetail";

const DetailScreen = ({ route }) => {
    return (
        <Box bg="#fff">
            <BookDetail route={route} />
        </Box>
    );
};


export default DetailScreen;