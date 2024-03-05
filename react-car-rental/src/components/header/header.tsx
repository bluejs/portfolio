import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from "@chakra-ui/image"
import { Flex, Text } from "@chakra-ui/layout"
import bikeHeader from "assets/images/car.png"
import arrowDown from "assets/svg/arrowDown.svg"

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        mt={["25px", "65px", "20px", "20px", "20px"]}
        color="#151515"
        fontWeight="bold"
        fontSize="110px"
        style={{ fontFamily: "ralewayBold" }}
      >
        <Text fontSize={["45px", "65px", "80px", "110px", "110px"]}>
          {t('header.title1')}
        </Text>
        {" "}
        <Text
          color="#00A3FF"
          ml="6"
          fontSize={["45px", "65px", "80px", "110px", "110px"]}
        >
          {t('header.title2')}
        </Text>
      </Flex>
      <Text
        mt={["-25px", "-30px", "-55px", "-55px", "-55px"]}
        color="#151515"
        fontWeight="bold"
        fontSize={["45px", "65px", "85px", "120px", "120px"]}
        style={{ fontFamily: "ralewayBold" }}
      >
        {t('header.title3')}
      </Text>
      <Image
        mt={["-0px", "34px", "-10px", "-10px", "-10px"]}
        src={bikeHeader}
      />
      <Image
        w={["23px", "27px", "30px", "-35px", "-38px"]}
        mt={["10px", "17px", "-8px", "-8px", "-8px"]}
        src={arrowDown}
      />
    </Flex>
  )
}

export default Header
