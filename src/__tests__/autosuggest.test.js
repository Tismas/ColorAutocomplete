import React from 'react';
import Autosuggest from '../components/Autosuggest';
import renderer from 'react-test-renderer';

test('With empty input', () => {
  const component = renderer.create(
    <Autosuggest 
        value=""
        suggestions={[
            {name: "Adam"}, 
            {name: "Sija"}, 
            {name: "Paweł"}
        ]}

        onChange={()=>{}}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('With not empty input and possible suggestions', () => {
  const component = renderer.create(
    <Autosuggest 
        value="Ad"
        suggestions={[
            {name: "Adam"}, 
            {name: "Sija"}, 
            {name: "Paweł"}
        ]}

        onChange={()=>{}}
    />,
  );
  let tree = component.toJSON();
  tree.children[0].props.onChange({target:{value:'Ad'}});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('With not empty input and possible suggestions', () => {
  const component = renderer.create(
    <Autosuggest 
        value="ij"
        suggestions={[
            {name: "Adam"}, 
            {name: "Sija"}, 
            {name: "Paweł"}
        ]}

        onChange={()=>{}}
    />,
  );
  let tree = component.toJSON();
  tree.children[0].props.onChange({target:{value:'ij'}});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('With not empty input and no possible suggestions', () => {
  const component = renderer.create(
    <Autosuggest 
        value="Szy"
        suggestions={[
            {name: "Adam"}, 
            {name: "Sija"}, 
            {name: "Paweł"}
        ]}

        onChange={()=>{}}
    />,
  );
  let tree = component.toJSON();
  tree.children[0].props.onChange({target:{value:'Szy'}});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});