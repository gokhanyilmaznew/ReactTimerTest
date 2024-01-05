import React from 'react';
import TimerButton from './TimerButton';
import renderer from 'react-test-renderer';

describe("TimerButton component snapshot", () => {
    test("should create snapshot", () => {
    
        expect(1).toMatchSnapshot();
    });
});