import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {App} from "./App";
import {Button, ButtonImg} from "./view/components/buttons";

it('smoke test', () => {
    renderer.create(<App />);
});
it('test Buttons', () => {
    renderer.create(<Button onPress={()=>{}} text={'Test'} />)
})
it('test ButtonsImg', () => {
    renderer.create(
        <ButtonImg
            onPress={()=>{}}
            text={'Test'}
            src={require('../src/view/ressources/today.png')}
        />
    )
})