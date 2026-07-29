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
        jest.resetAllMocks();
    });

    test('screen renders', async () => {

        render(<Dashboard />);

        const displayText = await screen.findByText('Screen renders'); // findByText is async

        expect(displayText).toBeVisible();
    });

    test('section label displays', () => {
        render(<Dashboard />);

        const onSiteText = screen.getByText('ON SITE NOW');

        expect(onSiteText).toBeTruthy();
    });

    test('ALERTS section label displays', () => {
        render(<Dashboard />);

        const alertsLabel = screen.getByText('ALERTS');

        expect(alertsLabel).toBeTruthy();
    });

    test('YOUR SITES section label displays', () => {
        render(<Dashboard />);

        const yourSitesLabel = screen.getByText('YOUR SITES');

        expect(yourSitesLabel).toBeTruthy();
    });

    test('on-site occupancy count displays', () => {
        render(<Dashboard />);

        const occupancyCount = screen.getByText('933');
        const capacityText = screen.getByText('of 1,340 capacity');

        expect(occupancyCount).toBeTruthy();
        expect(capacityText).toBeTruthy();
    });

    test('occupancy summary line displays', () => {
        render(<Dashboard />);

        const occupiedPercentage = screen.getByText('70% occupied');
        const siteZoneSummary = screen.getByText('5 sites · 18 zones');

        expect(occupiedPercentage).toBeTruthy();
        expect(siteZoneSummary).toBeTruthy();
    });

});