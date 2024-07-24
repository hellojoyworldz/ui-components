import "./App.css";
import { Heading, CardItem } from "react-ui-components-library";

function App() {
  return (
    <>
      <Heading title="테스트" theme={{ size: "xl", color: "gray40" }} />
      <CardItem title="CardItem" src="https://picsum.photos/200/300" />
    </>
  );
}

export default App;
