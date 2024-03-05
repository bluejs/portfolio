import {
  Container,
  Divider,
  Flex,
  Image,
  Select,
  Text,
  Button,
  Center,
} from "@chakra-ui/react"
import { useCartAction, useCart } from "../providers/cartProvider"
import { Link } from "react-router-dom"
import Card from "../common/card"
import { products } from "../mock/data"
import Layout from "../layout/layout"
import { CheckInCart } from "../utils/checkInCart"
import { useTranslation } from "react-i18next"
import { langs } from "i18n"

const ShopPage = (): JSX.Element => {
  const dispatch = useCartAction()
  const { cart } = useCart()
  const { t, i18n } = useTranslation();

  const productsLng = products[i18n.language as langs];

  const addToCart: AddTodCartProps = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex mt="10" w="full" justifyContent="space-between">
          <Flex flexDir="column">
            <Text
              fontSize={["27px", "27px", "35px", "35px", "35px"]}
              fontWeight="600"
              color="#191919"
              style={{ fontFamily: "ralewayBold" }}
            >
              {t('shop.findYourFavoriteCar')}
            </Text>
            <Text
              fontSize={["14px", "15px", "17px", "17px", "17px"]}
              mt="-4px"
              color="#7E7E7E"
              style={{ fontFamily: "ralewayMedium" }}
            >
              {t('shop.findYourFavoriteCarSub')}
            </Text>
          </Flex>
          <Select
            display={["none", "none", "block", "block", "block"]}
            w="230px"
            h="30px"
            fontSize="15px"
            placeholder={t('shop.selectCountry')}
            style={{ fontFamily: "ralewayMedium" }}
          >
            <option value="china">{t('shop.country1')}</option>
            <option value="eu">{t('shop.country2')}</option>
            <option value="us">{t('shop.country3')}</option>
          </Select>
        </Flex>
        <Divider mt="8" mb="8" borderColor="#E3E3E3" />
        <Flex
          justifyContent={[
            "center",
            "center",
            "center",
            "center",
            "space-between",
          ]}
          flexWrap="wrap"
        >
          {productsLng.map((product) => {
            return (
              <Card
                mb="14"
                key={product.id}
                flexDir="column"
                p="0"
                m="4"
                rounded="22px"
                w="365px"
                h="365px"
                boxShadow="sm"
                style={{ fontFamily: "ralewayMedium" }}
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
                <Link to={{ pathname: `/bike/${product.id}`, state: product }}>
                  <Flex p="4" justifyContent="space-between">
                    <Flex flexDir="column">
                      <Text
                        fontWeight="700"
                        fontSize="23px"
                        style={{ fontFamily: "ralewayBold" }}
                      >
                        {product.name}
                      </Text>
                      <Text
                        w="230px"
                        fontSize="13px"
                        mt="-2px"
                        color="#7E7E7E"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                      >
                        {product.desc}
                      </Text>
                    </Flex>
                    <Text style={{ opacity: 0.3, textDecoration: 'line-through' }}>$ {product.price}</Text>
                    <Text>$ {product.offPrice}</Text>
                  </Flex>
                </Link>
                <Center>
                  <Button
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#191919"
                    rounded="8"
                    _focus={{}}
                    _hover={{}}
                    h="30px"
                    w="92%"
                    variant="outline"
                    onClick={() => addToCart(product)}
                  >
                    {CheckInCart(cart, product) ? t('detail.inCart') : t('detail.add')}
                  </Button>
                </Center>
              </Card>
            )
          })}
        </Flex>
      </Container>
    </Layout>
  )
}

export default ShopPage
