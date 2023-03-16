import React from "react";
import Slider from "./MainPage/Slider";
import WhoCourseFor from "./MainPage/WhoCourseFor";
import Teachers from "./MainPage/Teachers";
import HowTraining from "./MainPage/HowTraining";
import WhatWillReceive from "./MainPage/WhatWillReceive";
import SubmitApplication from "./UI/SubmitApplication";
import OtherCoursesSeries from "./UI/OtherCoursesSeries";
import CourseProgram from "./UI/CourseProgram";
import StartNearestGroups from "./MainPage/StartNearestGroups";
import Regalia from "./UI/Regalia";
import SignUpCourse from "./UI/SignUpCourse";
import QuestionsAnswers from "./MainPage/QuestionsAnswers";
import OtherRelevantCourses from "./MainPage/OtherRelevantCourses";
import OurCustomers from "./MainPage/OurCustomers";
import AskQuestion from "./UI/AskQuestion";

const MainPage = (props) => {

    return (
        <React.Fragment>
            <Slider />
            <WhoCourseFor />
            <Teachers />
            <HowTraining />
            <WhatWillReceive />
            <SubmitApplication />
            <OtherCoursesSeries />
            <CourseProgram />
            <StartNearestGroups />
            <Regalia />
            <SignUpCourse />
            <QuestionsAnswers />
            <OtherRelevantCourses />
            <OurCustomers />
            <AskQuestion />
        </React.Fragment>
    );
}

export default MainPage;