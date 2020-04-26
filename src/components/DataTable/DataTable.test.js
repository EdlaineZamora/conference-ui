import React from 'react'
import DataTable from './DataTable';
import { mount } from 'enzyme';

describe('DataTable', () => {
    it('Creates empty table given a empty list of items', () => {
        const props = {
            items: [],
            removeItem: jest.fn()
        };

        const dataTable = mount(<DataTable {...props}/>);
        const itemsQuantity = dataTable.find('tbody').find('tr')
        
        expect(itemsQuantity).toHaveLength(0);
    }),
    it('Creates populated table with two items given a list of two items', () => {
        const props = {
            items: [
                {
                    "id": 1,
                    "name": "OReilly",
                    "place": "London"
                },
                {
                    "id": 2,
                    "name": "TDC",
                    "place": "São Paulo"
                }
            ],
            removeItem: jest.fn()
        };

        const dataTable = mount(<DataTable {...props}/>);
        const itemsQuantity = dataTable.find('tbody').find('tr');
        
        expect(itemsQuantity).toHaveLength(2);
    })
});