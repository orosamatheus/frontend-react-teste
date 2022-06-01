import Layout from "./components/Layout";
import {
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";

import Form from "./components/Form";

function App() {
  return (
    <Layout>
      <Tabs isFitted variant="enclosed" w="100vw" colorScheme="twitter">
        <TabList mb="1em" >
          <Tab>Random CatFact</Tab>
          <Tab>List of CatFacts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form />
          </TabPanel>
          <TabPanel>
            <Form isListOfFacts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}

export default App;
