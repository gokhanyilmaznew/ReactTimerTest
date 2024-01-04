import React from 'react';
import Timer from './Timer';
import renderer from 'react-test-renderer';

describe("Timer component snapshot", () => {
    test("should create snapshot", () => {
    
        expect().toMatchSnapshot();
    });
});