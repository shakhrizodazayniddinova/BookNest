import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';

const TemplateStyled = styled.div`
    display: flex;

    .rightside{
        flex: 1;
    }
`

export default function Template() {
  return (
    <TemplateStyled data-aos="fade-up">
        <section className="rightside">
            <header>
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>
        </section>
    </TemplateStyled>
  )
}
