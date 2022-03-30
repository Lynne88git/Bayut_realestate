import Link from "next/link";
import Image from "next/image";
import { Box, Flex, text, Avatar } from "@chakra-ui/react"
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify";

import DefaultImg from '../assets/images/house.jpg'


const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
    <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImg} width={400} height={260} alt="house"></Image>
    </Box>
        </Flex>
    </Link>
)

export default Property