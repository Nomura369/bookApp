import { HStack, VStack, Text, Image, Center } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const DetailScreen = ({ route }) => {
    // Hooks函數
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

    const buttonTitle = "Buy Now for " + price;

    return (
        <Center>
            <VStack>
                <Image
                    width="100%"
                    height="100%"
                    marginBottom="16"
                    source={{ uri: image }}
                    alt="bigBookImage"
                />
                <Text fontSize={24} fontWeight="500" color={colors.black} mb={8}>{title}</Text>
                <Text fontSize={14} fontWeight="400" color={colors.gray} mb={8}>{author}</Text>
                <HStack mb={16}>
                    <Image
                        width="100%"
                        height="100%"
                        marginRight="8"
                        source={{ uri: stars_image }}
                        alt="starsImage"
                    />
                    <Text fontSize={14} fontWeight="400" color={colors.black} mr={0}>{stars}</Text>
                    <Text fontSize={14} fontWeight="400" color={colors.gray}> / 5.0</Text>
                </HStack>
                <Text fontSize={14} fontWeight="400" color={colors.black} mb={28}>{description}</Text>
                <Button title={buttonTitle} color={colors.purple} />
            </VStack>
        </Center>
    );
};


export default DetailScreen;