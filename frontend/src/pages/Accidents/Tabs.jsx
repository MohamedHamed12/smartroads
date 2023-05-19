import PropTypes from "prop-types";
import { Tabs, TabList, Tab, Text } from "@chakra-ui/react";

const tabs = ["current", "past"];

function AccidentTabs({ current, past, onChange }) {
  return (
    <Tabs onChange={(index) => onChange(tabs[index])} variant="enclosed">
      <TabList>
        <Tab>
          Current cases
          <Text as="span" fontSize="0.8em" bg="currentColor" ml={2} px={2} borderRadius="100px">
            <Text as="span" color="white">
              {current}
            </Text>
          </Text>
        </Tab>
        <Tab>
          Past cases
          <Text as="span" fontSize="0.8em" bg="currentColor" ml={2} px={2} borderRadius="100px">
            <Text as="span" color="white">
              {past}
            </Text>
          </Text>
        </Tab>
      </TabList>
    </Tabs>
  );
}

AccidentTabs.propTypes = {
  current: PropTypes.number,
  past: PropTypes.number,
  onChange: PropTypes.func,
};

export default AccidentTabs;
