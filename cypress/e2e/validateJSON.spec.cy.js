const team = require ('../fixtures/rcb.json');
describe ('Test JSON Data', async ()=>{

    it('Validate max 4 foreign players', async ()=>{

        cy.addTestContext (`JSON data is ${JSON.stringify (team, null, 2)}`)

        let count = 0;
        team.player.forEach ((athlete)=> {
            if (athlete.country !== 'India'){

                count++;
            }
        });
        cy.addTestContext (`Foreign Player count is ${count}`);
        expect (count, `ASSERTION ERROR: \n Expected: 4 \n Actual: ${count}`).to.be.lte (4);
    });

    it('Validate one all-rounder', async ()=>{


        let count = 0;
        team.player.forEach ((athlete)=> {
            if (athlete['role'] === 'AllRounder'){

                count++;
            }
        });
        cy.addTestContext (`all-rounder count is ${count}`);
        expect (count, `ASSERTION ERROR: \n Expected: 1 \n Actual: ${count}`).to.be.gte (1);
    });

    it('Validate one wicket keeper', async ()=>{


        let count = 0;
        team.player.forEach ((athlete)=> {
            if (athlete['role'] === 'Wicketkeeper'){

                count++;
            }
        });
        cy.addTestContext (`Wicket keeper count is ${count}`);
        expect (count, `ASSERTION ERROR: \n Expected: 1 \n Actual: ${count}`).to.be.gte (1);
    });

    it('Validate number of sub players and players in playing XI', async ()=>{


        let countXI = 0;
        let countSub = 0;
        team.player.forEach ((athlete)=> {
            if (athlete.playing === 'XI'){

                countXI++;
            }
            if (athlete.playing === 'Sub'){

                countSub++;
            }

        });
        cy.addTestContext (`Playing XI count is ${countXI} \n Substitute count is ${countSub}`);
        expect (countXI, `ASSERTION ERROR:\n Expected : 11\n Actual : ${countXI}`).to.be.eq (11);
        expect (countSub, `ASSERTION ERROR:\n Expected : 4\n Actual : ${countSub}`).to.be.eq (4);
    });
});