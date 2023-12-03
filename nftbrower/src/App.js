import "./App.css";
import { Layout, Input, Button } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{ height: "calc(100% - 64px)", padding: 20, overflow: "auto" }}
      >
        <Input.Group compact>
          <Input
            style={{
              width: "calc(100% - 200px)",
            }}
            defaultValue="https://ant.design"
          />
          <Button type="primary">Submit</Button>
        </Input.Group>
      </Content>
    </Layout>
  );
}

export default App;
