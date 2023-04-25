// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Image,
  Select,
  SimpleGrid,
  useColorModeValue,
  Tag,
  TagLabel,
  Radio,
  RadioGroup,
  useRadioGroup,
  useToast,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import Card from "components/card/Card";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import RadioCard from "views/admin/default/components/PanelModels";

import firebaseAuth from 'lib/firebase';
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";

import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const user = firebaseAuth.currentUser;

  const toast = useToast();
  const avatars = [
    { name: 'V0100', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0100_thumb.jpg' },
    { name: 'V0101', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0101_thumb.jpg' },
    { name: 'V0102', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0102_thumb.jpg' },
    { name: 'V0103', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0103_thumb.jpg' },
    { name: 'V0110', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0110_thumb.jpg' },
    { name: 'V0111', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0111_thumb.jpg' },
    { name: 'V0112', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0112_thumb.jpg' },
    { name: 'V0130', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0130_thumb.jpg' },
    { name: 'V0131', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0131_thumb.jpg' },
    { name: 'V0143', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0143_thumb.jpg' },
    { name: 'V0170', image: 'https://verpan.gr/wp-content/uploads/2020/06/V0170_thumb.jpg' },
  ];

  const handleChange = (value) => {
    toast({
      title: `Panel model selected : ${value}!`,
      status: 'success',
      duration: 2000,
    })
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'V0100',
    onChange: handleChange,
  })

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <Card
        direction='column'
        w='100%'
        px='0px'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
          <Flex px='25px' justify='space-between' align='center'>
            <Text
              color={textColor}
              fontSize='22px'
              fontWeight='700'
              lineHeight='100%'>
              Hello {user.displayName}
            </Text>
          </Flex>
      </Card>
      </SimpleGrid>

      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <Card
          direction='column'
          w='100%'
          px='0px'
          overflowX={{ sm: "scroll", lg: "hidden" }}>
          <Flex px='25px' justify='space-between' align='center'>
            <Stack {...getRootProps()}>
              <Text>Selected panel model is: {value}</Text>
              <HStack>
                {avatars.map((avatar) => {
                  return (
                    <RadioCard
                      key={avatar.name}
                      image={avatar.image}
                      {...getRadioProps({ value: avatar.name })}
                    />
                  )
                })}
              </HStack>
            </Stack>
          </Flex>
        </Card>
        
      </SimpleGrid>

      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <Card
        direction='column'
        w='100%'
        px='0px'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
          <Flex px='25px' justify='space-between' align='center'>
            <Text
              color={textColor}
              fontSize='22px'
              fontWeight='700'
              lineHeight='100%'>
              Internal design
            </Text>
          </Flex>
      </Card>
      </SimpleGrid>

      {/*<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
              </SimpleGrid>*/}

    </Box>
  );
}
   
 
  {/*return (

    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Earnings'
          value='$350.4'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        />
        <MiniStatistics growth='+23%' name='Sales' value='$574.34' />
        <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id='balance'
                variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gba'>GBA</option>
              </Select>
            </Flex>
          }
          name='Your balance'
          value='$1,000'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='New Tasks'
          value='154'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>

        );
}*/}
