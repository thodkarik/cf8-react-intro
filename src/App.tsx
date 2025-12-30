// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
        {/*<ViteIntro />*/}
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props" />*/}
        {/*<ArrowFunctionalComponentWithProps title="2nd title" />*/}
        <ArrowFunctionalComponentWithPropsType
            title="Is an Arrow Functional Component with 2 Props"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quod?" />
    </>
  )
}

export default App
