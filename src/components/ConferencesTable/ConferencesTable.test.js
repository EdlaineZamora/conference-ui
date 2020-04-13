import React from 'react'
import ConferencesTable from './ConferencesTable';
import { mount } from 'enzyme';

describe('ConferencesTable', () => {
    it('Creates empty table given a empty list of conferences', () => {
        const props = {
            conferences: [],
            removeConference: jest.fn()
        };

        const conferencesTable = mount(<ConferencesTable {...props}/>);
        const conferencesQuantity = conferencesTable.find('tbody').find('tr')
        
        expect(conferencesQuantity).toHaveLength(0);
    }),
    it('Creates populated table with two conferences given a list of two conferences', () => {
        const props = {
            conferences: [
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
            removeConference: jest.fn()
        };

        const conferencesTable = mount(<ConferencesTable {...props}/>);
        const conferencesQuantity = conferencesTable.find('tbody').find('tr');
        
        expect(conferencesQuantity).toHaveLength(2);
    })
});