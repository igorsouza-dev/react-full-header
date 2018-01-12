import React from 'react';
import FullHeader from '../src/Main';
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
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#96060C"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () =>
        <FullHeader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática."
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    )
    .add('with title, subtitle, video', () =>
        <FullHeader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            video="http://thenewcode.com/assets/videos/polina.mp4"
        />
    );
