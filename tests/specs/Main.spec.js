import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader/>', () => {
    it('should have the header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });
    context('Title', () => {
        it('should have the h1 tag when a title is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have the h1 tag when no title is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have text inside h1', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });
    context('Subtitle', () => {
        it('should have the h2 tag when a subtitle is passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have the h2 tag when no subtitle is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have text inside h2', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD" />);
            expect(wrapper.find('h2').props().children).to.be.equal('TDD');
        });
    });

    context('bgColor', () => {
        it('should have background-color equal to #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });
        it('should have background-color equal to #000 when #000 is passed', () => {
            const wrapper = shallow(<FullHeader bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textColor', () => {
        it('should have color equal to #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });
        it('should have color equal to #ff0000 when #ff0000 is passed', () => {
            const wrapper = shallow(<FullHeader textColor="#ff0000" />);
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
    });

    context('font', () => {
        it('should have font sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have open-sans when open-sans is passed', () => {
            const wrapper = shallow(<FullHeader font="open-sans" />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });
});
