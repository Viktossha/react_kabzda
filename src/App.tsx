import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";

//function declaration
function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is app component'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff/>

            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>
            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <div>{props.title}</div>
}

export default App;