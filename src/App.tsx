// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";

import Layout from "./components/Layout.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";

function App() {

  return (
    <>
        {/*<ViteIntro />*/}
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props" />*/}
        {/*<ArrowFunctionalComponentWithProps title="2nd title" />*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*    title="Is an Arrow Functional Component with 2 Props"*/}
        {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quod?" */}
        {/*/>*/}

    {/*    <Card title="Card">*/}
    {/*        <ArrowFunctionalComponentWithPropsType*/}
    {/*            title="Is an Arrow Functional Component with 2 Props"*/}
    {/*            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quod?"*/}
    {/*        />*/}
    {/*    </Card>*/}
    {/*</>*/}
        <Layout>

            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*title="Is an Arrow Functional Component with 2 Props"*/}
            {/*description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quod?"*/}
            {/*/>*/}

            {/*<FunctionalComponentWithState />*/}
            {/*<ClassComponentWithState />*/}

            {/*<Counter/>*/}

            {/*<NameChanger />*/}

            <CounterWithMoreStates/>
        </Layout>
    </>
  )
}

export default App
