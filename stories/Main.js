import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => <FullHeader title="TDD" />)
    .add('with title and subtitle', () =>
        <FullHeader title="TDD" subtitle="Curso de Javascript com TDD na prática." />
    )
    .add('with title, subtitle, bgColor', () =>
        <FullHeader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática."
            bgColor="#3299bb"
        />
    )
    .add('with title, subtitle, bgColor, textColor', () =>
        <FullHeader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática."
            bgColor="#3299bb"
            textColor="#ff9900"
        />
    )
    .add('with title, subtitle, bgImg', () =>
        <FullHeader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática."
            bgImg="https://i.ytimg.com/vi/4DzUW4fI1s0/maxresdefault.jpg"
        />
    )
    .add('with title, subtitle, video', () =>
        <FullHeader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática."
            video="https://www.youtube.com/watch?v=MQoil6J2vYo"
        />
    );
