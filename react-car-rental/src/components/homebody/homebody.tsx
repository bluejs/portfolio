import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { useCart, useCartAction } from "../../providers/cartProvider"
import { Center, Container, Flex, Text } from "@chakra-ui/layout"
import { products } from "../../mock/data"
import { Link } from "react-router-dom"
import Card from "../../common/card"
import mapIcon from "assets/svg/map.svg"
import goldenCup from "assets/svg/goldenCup.svg"
import bikerIcon from "assets/svg/bikerIcon.svg"
import { CheckInCart } from "../../utils/checkInCart"
import { useTranslation } from "react-i18next"
import { langs } from "i18n"

const HomeBody = (): JSX.Element => {
  const dispatch = useCartAction()
  const { cart } = useCart()
  const { t, i18n } = useTranslation();

  const addToCart: AddTodCartProps = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const productsLng = products[i18n.language as langs];

  const blogItems = [
    {
      title: t('home.becomeChampion'),
      desc: t('home.becomeChampionDesc'),
      icon: mapIcon,
      id: 1,
    },
    {
      title: t('home.longDistance'),
      desc: t('home.longDistanceDesc'),
      icon: goldenCup,
      id: 2,
    },

    {
      title: t('home.ourService'),
      desc: t('home.ourServiceDesc'),
      icon: bikerIcon,
      id: 3,
    },
  ]

  return (
    <Container maxW="container.xl">
      <Center mt="10">
        <Text
          textAlign="center"
          fontSize={["15px", "15px", "18px", "18px", "18px"]}
          fontWeight="600"
          color="#A6A6A6"
          style={{ fontFamily: "ralewayBold" }}
        >
          {t('home.trustedPartners')}
        </Text>
      </Center>

      <Text
        mt="20"
        fontWeight="bold"
        fontSize={["30px", "36px", "46px", "46px", "46px"]}
        mb="5"
        color="#191919"
        style={{ fontFamily: "ralewayBold" }}
      >
        {t('home.newCar')}
      </Text>
      <Flex
        justifyContent={[
          "center",
          "center",
          "space-between",
          "space-between",
          "space-between",
        ]}
        flexWrap="wrap"
      >
        {productsLng.slice(productsLng.length - 2).map((product) => {
          return (
            <Card
              mt="8"
              key={product.id}
              p="0"
              rounded="22px"
              w="365px"
              h="365px"
            >
              <Flex
                w="full"
                h="236px"
                rounded="22px"
                p="4"
                justifyContent="center"
                alignItems="center"
              >
                <Image w="270px" objectFit="cover" src={product.image} />
              </Flex>
              <Flex p="4" justifyContent="space-between">
                <Link to={{ pathname: `/bike/${product.id}`, state: product }}>
                  <Flex flexDir="column">
                    <Text fontWeight="700" fontSize="23px">
                      {product.name}
                    </Text>
                    <Text
                      fontSize="13px"
                      mt="-2px"
                      color="#7E7E7E"
                      w="230px"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                      style={{ fontFamily: "ralewayMedium" }}
                    >
                      {product.desc}
                    </Text>
                  </Flex>
                </Link>
                <Text style={{ opacity: 0.3, textDecoration: 'line-through' }}>{product.price}</Text>
                <Text>{product.offPrice}</Text>
              </Flex>
              <Center>
                <Button
                  fontSize="14px"
                  border="1px solid"
                  borderColor="#191919"
                  rounded="8"
                  _focus={{}}
                  _hover={{}}
                  h="30px"
                  w="94%"
                  variant="outline"
                  onClick={() => addToCart(product)}
                >
                  {CheckInCart(cart, product) ? "In Cart" : "Add"}
                </Button>
              </Center>
            </Card>
          )
        })}
        <Flex
          w="325px"
          h="365px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          style={{ fontFamily: "ralewayBold" }}
        >
          <Text fontSize="30px" fontWeight="700">
            {t('home.seeMore')}
          </Text>
          <Text
            color="#7E7E7E"
            fontSize="15px"
            mt="-1"
            style={{ fontFamily: "ralewayMedium" }}
          >
            {t('home.seeMoreSub')}
          </Text>
          <Link to="/shop">
            <Button
              _focus={{}}
              _active={{ bg: "#494949" }}
              _hover={{ bg: "#272727" }}
              bg="#191919"
              color="#f9fafd"
              fontSize="14px"
              h="29px"
              mt="4"
              mb="8"
              style={{ fontFamily: "ralewayRegular" }}
            >
              {t('home.viewAll')}
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="120px"
        style={{ fontFamily: "ralewayMedium" }}
      >
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize={["30px", "36px", "41px", "41px", "41px"]}
          color="#191919"
        >
          {t('home.travelAroundTheWorld')}
        </Text>
        <Text
          textAlign="center"
          mt={["1", "1", "-1", "-1", "-1"]}
          fontSize={["16px", "17px", "18px", "18px", "18px"]}
          fontWeight="500"
          color="#A6A6A6"
        >
          {t('home.travelAroundTheWorldSub')}
        </Text>
      </Flex>

      <Flex
        mt="50px"
        w="full"
        justifyContent="space-between"
        alignItems="center"
        flexDir={["column", "column", "column", "row", "row"]}
        style={{ fontFamily: "ralewayMedium" }}
      >
        {blogItems.map((item) => {
          return (
            <Card
              mt="8"
              w={["290px", "323px", "323px", "323px", "323px"]}
              h="335px"
              rounded="23px"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
              alignItems="center"
              shadow="sm"
              key={item.id}
            >
              <Flex flexDir="column" alignItems="center">
                <Center h="130px">
                  <Image w="95px" src={item.icon} />
                </Center>
                <Text fontSize="25px" fontWeight="500">
                  {item.title}
                </Text>
                <Text color="#7E7E7E" fontSize="14px" textAlign="center">
                  {item.desc}
                </Text>
              </Flex>
              <Button
                w="130px"
                h="33px"
                rounded="6px"
                border="1px solid"
                borderColor="#151515"
                fontSize="15px"
                variant="outline"
                _focus={{}}
              >
                {t('home.learnMore')}
              </Button>
            </Card>
          )
        })}
      </Flex>
    </Container>
  )
}

export default HomeBody
