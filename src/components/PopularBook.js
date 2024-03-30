/*各個書本項目(Popular Books)*/
import { Box, VStack, Text, Image } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const PopularBook = ({ book }) => {
    // Hooks函數
    const { colors } = useTheme();
    return (
        <Box mr={16}>
            <VStack bg='#fff'>
                <Image
                    width="100%"
                    height="100%"
                    marginBottom="16"
                    source={{ uri:book.image }}
                    alt="bookImage"
                />
                <Text fontSize={16} fontWeight="500" color={colors.black} mb={8}>{book.title}</Text>
                <Text fontSize={12} fontWeight="500" color={colors.gray}>{book.author}</Text>
            </VStack>
        </Box>
    )
};


export default PopularBook;