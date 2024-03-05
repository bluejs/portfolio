import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Container, Divider, Flex, Text } from "@chakra-ui/layout"
import Card from "../common/card"
import Layout from "../layout/layout"
import { useCart, useCartAction } from "../providers/cartProvider"
import { useTranslation } from "react-i18next"

const CartPage = (): JSX.Element => {
  const { cart } = useCart()
  const dispatch = useCartAction()
  const { t } = useTranslation()

  const handleInc = (cartItem: ProductPorps) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem })
  }

  const handleDec = (cartItem: ProductPorps) => {
    dispatch({ type: "DEC_PRODUCT", payload: cartItem })
  }

  return (
    <Layout>
      <Container
        minH="70vh"
        maxW="container.xl"
        style={{ fontFamily: "ralewayBold" }}
      >
        <Text mt="8" fontSize="35px" fontWeight="600">
          {t('cart.yourCars')}
        </Text>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems={["center", "center", "center", "center", "flex-start"]}
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <Flex flexDir="column" w="full" alignItems="center">
            {cart.length ? (
              cart.map((c: any) => {
                return (
                  <Flex
                    key={c.id}
                    mt="10"
                    bg="#f8fafd"
                    shadow="sm"
                    rounded="14px"
                    w={["full", "full", "full", "900px", "900px"]}
                    h={["370px", "370px", "370px", "170px", "170px"]}
                    flexDir={["column", "column", "column", "row", "row"]}
                  >
                    <Flex
                      rounded="14"
                      bg={c.bg}
                      w={["full", "full", "full", "340px", "340px"]}
                      h={["200px", "200px", "200px", "full", "full"]}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        w={["200px", "200px", "220px", "160px", "160px"]}
                        src={c.image}
                        objectFit="cover"
                      />
                    </Flex>
                    <Flex
                      w="full"
                      justifyContent="space-between"
                      h={["150px", "150px", "150px", "auto", "auto"]}
                    >
                      <Flex
                        mb="2"
                        ml="4"
                        flexDir="column"
                        mt="2"
                        justifyContent="space-between"
                        h={["full", "full", "full", "auto", "auto"]}
                      >
                        <Flex flexDir="column">
                          <Text fontSize="25px" fontWeight="600">
                            {c.name}
                          </Text>
                          <Text
                            color="#7E7E7E"
                            mt="-1"
                            fontSize="13px"
                            w="500px"
                            display={[
                              "none",
                              "none",
                              "block",
                              "block",
                              "block",
                            ]}
                            style={{ fontFamily: "ralewayMedium" }}
                          >
                            {c.desc.slice(0, 140)}
                          </Text>
                        </Flex>
                        <Flex
                          flexDir="column"
                          style={{ fontFamily: "ralewayMedium" }}
                        >
                          <Text fontSize="14px">{t('cart.passengers')} {c.passengers}</Text>
                          <Text fontSize="14px">{t('cart.bags')} {c.bags}</Text>
                        </Flex>
                      </Flex>
                      <Flex
                        mr="4"
                        mt="3"
                        mb="3"
                        flexDir="column"
                        alignItems="flex-end"
                        justifyContent="space-between"
                        style={{ fontFamily: "ralewayMedium" }}
                      >
                        <Text>$ {c.offPrice * c.qty}</Text>
                        <Flex alignItems="center">
                          <Flex
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Flex
                              w="25px"
                              h="25px"
                              justifyContent="center"
                              alignItems="center"
                              cursor="pointer"
                              onClick={() => handleDec(c)}
                            >
                              <Text
                                _selection={{ bg: "transparent" }}
                                fontWeight="md"
                                fontSize="22px"
                              >
                                -
                              </Text>
                            </Flex>
                            <Flex
                              w="25px"
                              h="25px"
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Text
                                _selection={{ bg: "transparent" }}
                                fontWeight="md"
                                fontSize="22px"
                              >
                                {c.qty}
                              </Text>
                            </Flex>
                            <Flex
                              w="25px"
                              h="25px"
                              justifyContent="center"
                              alignItems="center"
                              cursor="pointer"
                              onClick={() => handleInc(c)}
                            >
                              <Text
                                _selection={{ bg: "transparent" }}
                                fontWeight="md"
                                fontSize="22px"
                              >
                                +
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                )
              })
            ) : (
              <Flex
                mt="20"
                w="full"
                alignItems="center"
                flexDir="column"
                style={{ fontFamily: "ralewayBold" }}
              >
                <Text fontSize="36px" fontWeight="700">
                  {t('cart.yourCartIsEmpty')}
                </Text>
                <Link to="/shop">
                  <Button
                    bg="#191919"
                    color="#f9fafd"
                    _hover={{ bg: "#363636" }}
                    _active={{ bg: "#191919" }}
                    mt="5"
                    _focus={{}}
                    w="140px"
                    style={{ fontFamily: "ralewayRegular" }}
                  >
                    {t('cart.goBack')}
                  </Button>
                </Link>
              </Flex>
            )}
          </Flex>

          <CartSummery />
        </Flex>
      </Container>
    </Layout>
  )
}

export default CartPage

export function CartSummery() {
  const { cart, total } = useCart()
  const { t } = useTranslation()

  const totalPrice = cart.length
    ? cart.reduce((acc: any, curr: any) => acc + curr.qty * curr.offPrice, 0)
    : 0

  return (
    <Card
      display={cart.length ? "flex" : "none"}
      flexDir="column"
      position="relative"
      alignItems="center"
      p="4"
      mt="10"
      bg="#f8fafd"
      rounded="14px"
      w={["full", "full", "400px", "400px", "400px"]}
      h="260px"
      shadow="sm"
      style={{ fontFamily: "ralewayBold" }}
    >
      <Text fontSize="21px" fontWeight="500">
        {t('cart.orderSummery')}
      </Text>
      <Divider mt="3" mb="3" borderColor="#E3E3E3" />
      <Flex
        w="full"
        justifyContent="space-between"
        color="#4B4B4B"
        style={{ fontFamily: "ralewayMedium" }}
      >
        <Text>{t('cart.originalPrice')}</Text>
        <Text>$ {totalPrice}</Text>
      </Flex>
      <Flex
        mt="3"
        w="full"
        justifyContent="space-between"
        color="#4B4B4B"
        style={{ fontFamily: "ralewayMedium" }}
      >
        <Text>{t('cart.cartDiscount')}</Text>
        <Text>$ {totalPrice - total}</Text>
      </Flex>
      <Divider mt="3" mb="3" borderColor="#E3E3E3" />
      <Flex
        w="full"
        mb="3"
        justifyContent="space-between"
        color="#4B4B4B"
        style={{ fontFamily: "ralewayMedium" }}
      >
        <Text>{t('cart.total')}</Text>
        <Text>$ {total}</Text>
      </Flex>
      <Button
        fontSize="14px"
        border="1px solid"
        borderColor="#191919"
        rounded="8"
        _focus={{}}
        _hover={{}}
        h="30px"
        w="90%"
        variant="outline"
        position="absolute"
        bottom="3"
        style={{ fontFamily: "ralewayMedium" }}
      >
        {t('cart.checkOut')}
      </Button>
    </Card>
  )
}
