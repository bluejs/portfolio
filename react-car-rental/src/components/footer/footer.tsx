import { Center, Flex } from "@chakra-ui/react"
import { Container, Text } from "@chakra-ui/layout"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"
import { useTranslation } from "react-i18next"

const FooterComp = (): JSX.Element => {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      title: t('footer.company'),
      children: [
        t('footer.termsOfService'),
        t('footer.privacyPolicy'),
        t('footer.helpCenter'),
        t('footer.contact'),
        t('footer.aboutUs'),
      ],
    },
    {
      id: 2,
      title: t('footer.policy'),
      children: [
        t('footer.privacyPolicy'),
        t('footer.returnRefundPolicy'),
        t('footer.orderDeliveryPolicy'),
        t('footer.cancellationPolicy'),
        t('footer.termsConditions'),
      ],
    },
    {
      id: 3,
      title: t('footer.faq'),
      children: [
        t('footer.manageDeliveries'),
        t('footer.account'),
        t('footer.payments'),
        t('footer.returns'),
        t('footer.orders'),
      ],
    },
    {
      id: 4,
      title: t('footer.support'),
      children: [
        t('footer.contactUs'),
        t('footer.onlineChat'),
        t('footer.whatsapp'),
        t('footer.telegram'),
        t('footer.ticketing'),
      ],
    },
    {
      id: 5,
      title: t('footer.about'),
      children: [
        t('footer.aboutUs'),
        t('footer.careers'),
        t('footer.inPress'),
        t('footer.blog'),
        t('footer.jobs'),
      ],
    },
  ]

  return (
    <Flex
      w="100%"
      minH="450px"
      h="auto"
      bg="#f9fafd"
      position="relative"
      mt="200px"
      style={{ fontFamily: "ralewayBold" }}
    >
      <Container
        maxW={[
          "container.sm",
          "container.sm",
          "container.md",
          "container.lg",
          "container.xl",
        ]}
        position="relative"
      >
        <Center>
          <Flex
            w={["80%", "90%", "98%", "full", "full"]}
            minH="90px"
            rounded="12px"
            p="3"
            top="-45px"
            bg="#4475F2"
            position="absolute"
            alignItems="center"
            justifyContent="space-between"
            flexDir={["column", "column", "row", "row", "row"]}
          >
            <Flex ml={["1", "1", "1", "8", "8"]} flexDir="column">
              <Text fontSize="22px" color="#f8fafd" fontWeight="700">
                {t('footer.newsletter')}
              </Text>
              <Text
                fontSize="15px"
                color="#DAE3FC"
                style={{ fontFamily: "ralewayMedium" }}
              >
                {t('footer.newsletterDesc')}
              </Text>
            </Flex>
            <InputGroup
              w={["full", "60%", "370px", "370px", "370px"]}
              mr={["0", "0", "0", "8", "8"]}
              mt={["8px", "17px", "0px", "0px", "0px"]}
              style={{ fontFamily: "ralewayMedium" }}
            >
              <Input
                _placeholder={{ color: "#f8fafd", fontWeight: "200" }}
                placeholder={t('footer.enterYourEmail')}
                rounded="55px"
                bg="#608AF4"
                border="none"
              />
              <InputRightElement w="100px">
                <Button fontWeight="400" h="70%" color="#4475F2" rounded="55px">
                  {t('footer.submit')}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Center>

        <Flex
          mt={["120px", "120px", "90px", "90px", "90px"]}
          justifyContent="space-between"
          alignItems="flex-start"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          {items.map((item) => {
            return (
              <Flex
                key={item.id}
                mt="8"
                ml={["20", "10", "0", "0", "0"]}
                flexDir="column"
                style={{ fontFamily: "ralewayMedium" }}
              >
                <Text fontSize="24px" fontWeight="700">
                  {item.title}
                </Text>
                {item.children.map((subTitle, index) => (
                  <Text fontWeight="500" mt="3" color="#7E7E7E" fontSize="15px" key={index}>
                    {subTitle}
                  </Text>
                ))}
              </Flex>
            )
          })}
        </Flex>
      </Container>
    </Flex>
  )
}

export default FooterComp
