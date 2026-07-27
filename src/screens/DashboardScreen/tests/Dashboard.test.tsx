import react from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { Dashboard } from '../Dashboard';

/* UI Tests for Dashboard Screen */
 // simplest to most dynamic


 /* Tests 
 
# Screen renders without crashing (baseline smoke test)
# "ON SITE NOW" section label renders
# "ALERTS" section label renders
# "YOUR SITES" section label renders
# The occupancy summary numbers render (933, 1,340, 70% occupied, 5 sites · 18 zones)
# A single alert card renders its title, description, and timestamp
# A single site card renders its name, occupancy numbers, and "zones in your access" text
# Multiple alerts / multiple sites render correctly when there's more than one (this is where "as you scroll, more sites appear" becomes testable — really just "does it render N site cards given N sites of data," scrolling itself isn't very meaningfully testable in Jest)
# The floating "Ask" button renders
 */


describe('Screen UI tests', () => {
    
    beforeEach(() => {
    
    })
    
    test('screen renders', () => {
        const displayText = screen.findByText('Screen renders');

        render(Dashboard)

        expect(displayText).toBeVisible();
    })
})