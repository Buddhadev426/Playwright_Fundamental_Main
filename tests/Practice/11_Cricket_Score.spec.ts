import { test, expect } from '@playwright/test';

test('Find Top 3 Scorers', async ({ page }) => {

    const expectedTop3 = [
    {
        name: 'Tara Hegde',
        team: 'Coastal Ravens',
        score: 104
    },
    {
        name: 'Devansh Kapoor',
        team: 'Northern Stallions',
        score: 88
    },
    {
        name: 'Aarav Sharma',
        team: 'Northern Stallions',
        score: 72
    }
];


    await page.goto('https://app.thetestingacademy.com/playwright/tables/scorecard');
    const teams = page.locator('article.innings');
    const players: {
        name: string;
        team: string;
        score: number;
    }[] = [];
    const teamCount = await teams.count();
    for (let i = 0; i < teamCount; i++) {
        const team = teams.nth(i);
        // Get team name
        const teamName = await team.locator('h2 span').innerText();
        // Get only player rows
        const rows = team.locator(
            'tbody tr:not(.row-extras):not(.row-total)'
        );

        const rowCount = await rows.count();

        for (let j = 0; j < rowCount; j++) {
            const row = rows.nth(j);
            const name = await row.locator('td').nth(0).locator('strong').innerText();
            const scoreText = await row.locator('td').nth(2).innerText();
            const score = parseInt(scoreText, 10);

            players.push({
                name,
                team: teamName,
                score
            });
        }
    }
    console.log(players);

    // Sort highest score first
    players.sort((a, b) => b.score - a.score);
    // Get top 3
    const top3 = players.slice(0, 3);
    console.log('Top 3 Scorers:');

    for (const player of top3) {
        console.log(
            `${player.name} - ${player.team} - ${player.score}`
        );
    }

    expect(top3).toEqual(expectedTop3);

    await page.pause();
});