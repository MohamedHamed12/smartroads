import * as api from "~api";
import { useQuery } from "@tanstack/react-query";
import { Form, Link as RouterLink, redirect, useNavigate, useParams } from "react-router-dom";
import { accidentQuery } from "./";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FiCalendar, FiExternalLink, FiMapPin } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import { useCallback, useState } from "react";

export const accidentEditAction = async ({ request, params }) => {
  const data = {};
  const formData = await request.formData();
  for (let key of formData.keys()) data[key] = formData.get(key);
  await api.accidentUpdate(params.id, data);
  return redirect("../");
};

function Edit() {
  const { id } = useParams();
  const { data: accident } = useQuery(accidentQuery(id));
  const navigate = useNavigate();
  const googleMapLink = `https://maps.google.com/?q=${accident.unit.location.latt},${accident.unit.location.long}`;
  const [formValues, setFormValues] = useState({
    title: accident.title,
    description: accident.description,
  });

  const onChange = useCallback((event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  }, []);

  return (
    <>
      <Form method="PATCH">
        <Stack
          mt={6}
          direction={{ base: "column-reverse", lg: "row" }}
          justify="space-between"
          align="center"
        >
          <Input
            name="title"
            variant="filled"
            placeholder="Emergency case title"
            value={formValues.title}
            onChange={onChange}
          />
          <ButtonGroup isAttached>
            <Button
              size="sm"
              leftIcon={<Icon as={BsX} />}
              role="link"
              onClick={() => navigate("../")}
            >
              Cancel
            </Button>
            <Button type="submit" size="sm" colorScheme="green" leftIcon={<Icon as={BiSave} />}>
              Save
            </Button>
          </ButtonGroup>
        </Stack>

        <Textarea
          mt={4}
          variant="filled"
          name="description"
          placeholder="Emergency case description"
          value={formValues.description}
          onChange={onChange}
        />
      </Form>

      <Flex direction="column" gap={3} mt={6} color="gray.700">
        <HStack>
          <Icon as={FiCalendar} />
          <Text w="150px">Date</Text>
          <Text>{new Date(accident.datetime).toLocaleString()}</Text>
        </HStack>

        <HStack>
          <Icon as={FiMapPin} />
          <Text w="150px">Location</Text>
          <Link as={RouterLink} to={googleMapLink} color="blue.500">
            {accident.unit.location.latt}, {accident.unit.location.long}
            <Icon ml={2} as={FiExternalLink} />
          </Link>
        </HStack>
      </Flex>
    </>
  );
}

export default Edit;
