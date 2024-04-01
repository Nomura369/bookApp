/*各個書本項目(Newest)*/
import { VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";


const NewestBook = ({ book, navigation }) => {
    const { colors } = useTheme();

    return (
        <VStack mr={16}>
            <Pressable onPress={ () => navigation.navigate("Detail", book) }>
                <Image 
                    width={140}
                    height={200}
                    marginBottom={16}
                    source={{ uri: book.image }}
                    alt="bookImage"
                />
            </Pressable>
            <Image 
                width={86}
                height={14}
                marginBottom={8}
                source={{ uri: book.stars_image }}
                alt="starsImage"
            />
            <Text fontSize={16} fontWeight="500" color={colors.black} mb={8}>{book.title}</Text>
            <Text fontSize={12} fontWeight="500" color={colors.black} opacity={0.5}>{book.author}</Text>
        </VStack>
    )
};

export default NewestBook;