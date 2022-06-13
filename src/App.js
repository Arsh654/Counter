import React from "react";
import Counter from "./Components/Counter";
import Clicked from "./Components/Functionclick";
import EventBind from "./Components/EventBind";
import ParentCompo from "./Components/ParentCompo";
import NameList from "./Components/NameList";
import Form from "./Components/Form";
import ParentPureCompo from "./Components/ParentPureCompo";
import RefsDemo from "./Components/RefsDemo";
import PortalsDemo from "./Components/PortalsDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import ClickCounter from "./Components/ClickCounter";
import Hovercounter from "./Components/Hovercounter";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";
import PostList from "./Components/PostList";
import HookUSCounter from "./Components/HookUSCounter";
import HookUSObj from "./Components/HookUSObj";
import HookUSArr from "./Components/HookUSArr";
import HookUEcounter from "./Components/HookUEcounter";
import HookUEMouse from "./Components/HookUEMouse";
import HkUEToggleMouse from "./Components/HkUEToggleMouse";
import DataFetchUE from "./Components/DataFetchUE";
import CounteruseReducer from "./Components/CounteruseReducer";
import './App.css';
import DataFetchUR1 from "./Components/DataFetchUR1";
import DataFetchUR2 from "./Components/DataFetchUR2";
import UseCallbkParent from "./Components/UseCallbkParent";
import StateImmuOBJ from "./Components/StateImmuOBJ";
import StateimmuARR from "./Components/StateimmuARR";

function App() {
  return (
    <div className="App">
      {/* <Clicked/> */}
      {/* <EventBind/> */}
      {/* <ParentCompo/> */}
      {/* <NameList/> */}
      {/* <Form/> */}
      {/* <ParentPureCompo/> */}
      {/* <RefsDemo/> */}
      {/* <PortalsDemo/> */}
       {/* <ErrorBoundary>
      <Hero HeroName={"Spiderman"}/>
      <Hero HeroName={"shaktiman"}/> */}
      {/* <Hero HeroName={"Joker"}/> */}
      {/* </ErrorBoundary>  */}
      {/* <ClickCounter/>
      <Hovercounter/> */}
      {/* <UserProvider value="Arshad Ali">
      <ComponentC />
      </UserProvider> */}
      {/* <PostList/> */}
      {/* <HookUSCounter/> */}
      {/* <HookUSObj/> */}
      {/* <HookUSArr/> */}
      {/* <HookUEcounter/> */}
      {/* <HookUEMouse/> */}
      {/* <HkUEToggleMouse/> */}
      {/* <DataFetchUE/> */}
      {/* <CounteruseReducer/> */}
      {/* <DataFetchUR2/> */}
      {/* <UseCallbkParent/> */}
      {/* <StateImmuOBJ/> */}
      <StateimmuARR/>
    </div>
  );
}

export default App;
