import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

//function declaration
function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [on, setOn] = useState(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is app component'}/>
            Article 1
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            Article 2
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff/>

            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>
            <UncontrolledRating/>
            <OnOff on={on} onChange={setOn}/>
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
