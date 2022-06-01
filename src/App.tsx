import Layout from "./components/Layout/Layout";
import {
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Layout>
      <Tabs isFitted variant="enclosed" w="100vw">
        <TabList mb="1em" bgColor="blue.50">
          <Tab>Random CatFact</Tab>
          <Tab>List of CatFacts</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>one!</Text>
          </TabPanel>
          <TabPanel>
            <Text>two!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}

export default App;
