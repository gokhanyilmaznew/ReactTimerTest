import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe("App component snapshot", () => {
    test("should create snapshot", () => {
    
        expect().toMatchSnapshot();
    });
});