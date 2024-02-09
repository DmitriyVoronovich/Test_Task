import React from 'react';
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {dataWithMatches} from "../../../data/data";
import {Schedule} from "./event/Schedule";
import {Login} from "../login/Login";

export const Main = (props) => {

    return (
        <MainSection>
            <Container>
                {props.login && <Login closeLoginForm={props.closeLoginForm}/>}
                {dataWithMatches.map((item) => {
                    return (<Schedule key={item.id} data={item} />)
                })}
            </Container>
        </MainSection>
    );
};

const MainSection = styled.section`

`