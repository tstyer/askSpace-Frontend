import react from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { Dashboard } from '../Dashboard';
import { AppHeader } from '../../../components/layout/app_header/AppHeader';

/* UI Tests for Dashboard Screen */

describe('Screen UI tests', () => {
    
    beforeEach(async () => {
        jest.resetAllMocks();
        await render(<Dashboard />);
    });

    test('screen renders', () => {

        const displayText = screen.getByText('Screen renders'); // findByText is async

        expect(displayText).toBeVisible();
    });

    test('summary box displays', () => {
       
        const summaryBox = screen.getByTestId('Summary Box');

        expect(summaryBox).toBeOnTheScreen();
    });

    test('ALERTS section label displays', () => {
       
        const alertsLabel = screen.getByText('ALERTS');

        expect(alertsLabel).toBeTruthy();
    });

    test('YOUR SITES section label displays', () => {
      
        const yourSitesLabel = screen.getByText('YOUR SITES');

        expect(yourSitesLabel).toBeTruthy();
    });

    test('on-site occupancy count displays', () => {

        // CHANGE AS OCCUPANCY CHANGES: WONT BE FIXED TO 933
        const occupancyCount = screen.getByText('933');
        const capacityText = screen.getByText('of 1,340 capacity');

        expect(occupancyCount).toBeTruthy();
        expect(capacityText).toBeTruthy();
    });

    test('occupancy summary line displays', () => {
    

        const occupiedPercentage = screen.getByText('70% occupied');
        const siteZoneSummary = screen.getByText('5 sites · 18 zones');

        expect(occupiedPercentage).toBeTruthy();
        expect(siteZoneSummary).toBeTruthy();
    });

});