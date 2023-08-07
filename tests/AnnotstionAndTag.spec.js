import {test} from '@playwright/test'

test.skip('Test One', async({page})=>{

});
test('not yet ready', async({page})=>{

    test.fail();

});


test.fixme('test to be fixed', async ({page}) => {

});


// test.only('slow test', async ({page}) => {
//     test.slow()

// });
//tag
//@smoke @fast
test('test login page @smoke', async ({page}) => {

});