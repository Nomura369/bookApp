/*各個書本項目(Popular Books)*/
import { VStack, Text, Image } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const PopularBook = ({ book }) => {
    const { colors } = useTheme();
    return (
        <VStack mr={16}>
            <Image 
                width={140}
                height={200}
                marginBottom={16}
                source={{ uri: book.image }}
                alt="bookImage"
            />
            <Text fontSize={16} fontWeight="500" color={colors.black} mb={8}>{book.title}</Text>
            <Text fontSize={12} fontWeight="500" color={colors.black} opacity={0.5}>{book.author}</Text>
        </VStack>
    )
};


export default PopularBook;