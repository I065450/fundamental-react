import { mount } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile.Actions />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the TileActions component', () => {
            const element = mount(<Tile.Actions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
