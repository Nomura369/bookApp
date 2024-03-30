/*各個書本項目(Newest)*/
import { Box, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";


const NewestBook = ({ book }) => {
    // Hooks函數
    const { colors } = useTheme();

    return (
        <Box mr={16}>
            <VStack bg='#fff'>
                <IfNavigation book={book}/>
                <Image
                    width="100%"
                    height="100%"
                    marginBottom="8"
                    source={{ uri:book.stars_image }}
                    alt="starsImage"
                />
                <Text fontSize={16} fontWeight="500" color={colors.black} mb={8}>{book.title}</Text>
                <Text fontSize={12} fontWeight="500" color={colors.gray}>{book.author}</Text>
            </VStack>
        </Box>
    )
};

const IfNavigation = ({ book }) => {
    // Hooks函數
    const { navigation } = useNavigation();
    if(book.title == "Yves Saint Laurent"){
        return(
            <Pressable
                onPress={() => navigation.navigate('Detail', book)}
            >
                <Image
                    width="140"
                    height="200"
                    marginBottom="16"
                    source={{ uri:book.image }}
                    alt="bookImage"
                />
            </Pressable>
        );
    } else {
        <Image
            width="100%"
            height="100%"
            marginBottom="16"                
            source={{ uri:book.image }}
            alt="bookImage"
        />
    }
};

export default NewestBook;