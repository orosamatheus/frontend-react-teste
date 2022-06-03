import Layout from "./components/Layout";
import {
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Box,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Form from "./components/Form";
import { useContext, useState } from "react";
import { Context } from "./contexts/fact";
import InfiniteScroll from "react-infinite-scroll-component";
import api from "./services/api";
import Card from "./components/Card";

function App() {
  const { facts, lastPage, setFacts, randomFact } = useContext(Context);
  const [page, setPage] = useState(2);

  const getMoreFacts = async () => {
    const { data } = await api.get(`facts?page=${page}`);
    setFacts([...facts, ...data.data]);

    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  return (
    <Layout>
      <Tabs
        className="tabs"
        isFitted
        variant="enclosed"
        w="100vw"
        colorScheme="twitter"
      >
        <TabList className="tabList" mb="1em">
          <Tab className="tab">Random CatFact</Tab>
          <Tab className="tab">List of CatFacts</Tab>
        </TabList>
        <TabPanels className="tabPanels">
          <TabPanel className="tabPanel">
            <Form />
            <Box display="flex" justifyContent="center">
              {randomFact.length ? (
                <Card>{randomFact.fact}</Card>
              ) : (
                <Text align="center" mt="4">
                  Click for a random catFact!
                </Text>
              )}
            </Box>
          </TabPanel>
          <TabPanel className="tabPanel">
            <Form isListOfFacts />
            <Box display="flex" justifyContent="center">
              <InfiniteScroll
                data-testid="scrollBar"
                dataLength={facts.length}
                next={getMoreFacts}
                hasMore={page < lastPage}
                loader={<Spinner colorScheme="blue" />}
                endMessage={
                  facts.length === 0 ? (
                    <Text align="center" mt="4">
                      Click for a list of catFacts!
                    </Text>
                  ) : (
                    <Text align="center" mt="4" decoration="underline">
                      Yay! You have seen it all
                    </Text>
                  )
                }
              >
                {facts.map((fact: any, index: number) => (
                  <Box key={index}>
                    <Card>{fact.fact}</Card>
                  </Box>
                ))}
              </InfiniteScroll>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}

export default App;
