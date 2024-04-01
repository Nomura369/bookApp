import { HStack, VStack, Text, Image, ScrollView, Pressable } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const BookDetail = ({ route }) => {
    const { colors } = useTheme();
    const { 
        title, 
        stars,
        stars_image,
        author,
        image,
        price,
        description
      } = route.params;

    const buttonTitle = "BUY NOW FOR " + price;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <VStack alignItems="center" mt={8} mx={20} mb={60}>
                <Image
                        width={210}
                        height={300}
                        marginBottom={28}
                        source={{ uri: image }}
                        alt="bigBookImage"
                    />
                <Text fontSize={24} fontWeight="500" color={colors.black} mb={8}>{title}</Text>
                <Text fontSize={14} fontWeight="400" color={colors.gray} mb={8}>{author}</Text>
                <HStack alignItems="center" mb={16}>
                    <Image
                                width={86}
                                height={14}
                                source={{ uri: stars_image }}
                                alt="starsImage"
                    />
                    <Text fontSize={14} fontWeight="400" color={colors.black} ml={8}>{stars}</Text>
                    <Text fontSize={14} fontWeight="400" color={colors.gray}> / 5.0</Text>
                </HStack>
                <Text fontSize={14} fontWeight="400" color={colors.black} mb={28} textAlign="center" lineHeight={24}>{description}</Text>
                <Pressable>
                    <Text 
                        color="#fff" 
                        bg={colors.purple} 
                        fontSize={14} 
                        fontWeight="500" 
                        px={16} 
                        py={10} 
                        borderRadius={4}>
                            {buttonTitle}
                        </Text>
                </Pressable>
            </VStack>
        </ScrollView>
    );
};


export default BookDetail;