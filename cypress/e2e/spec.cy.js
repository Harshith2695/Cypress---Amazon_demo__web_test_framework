let minPrice;
let maxPrice;

describe('Navigate to Amazon website and validate price filter', async () => {


  // Step 1. Open the URL – amazon.in
  it('Launch and navigate to homepage', async () => {

    await cy.visit('/');
  });

  // Step 2. Enter ‘Mobile’ in the search box and click on search
  it('Search mobile', async () => {
    await cy.get('[id="twotabsearchtextbox"]').click().type('Mobile');
    await cy.get('[id*="search-submit-button"]').click();
  });

  // Step 3.	Filter the results by selecting the price range between 10000-20000
  it('Filter by price range', async () => {
    minPrice = '10,000';
    maxPrice = '20,000';
    await cy.get('div[id="priceRefinements"]>ul span[class*="color"]').contains(`₹${minPrice} - ₹${maxPrice}`).click();
  });

  // Step 4. Validate all the products displayed on the page are with in the price range selected (10000-20000)
  it('Validate prices are greater than min price and less than max price', async () => {

    await cy.get('div[class*="result-list"]>div[data-component-type*="search-result"] span[class*="price-whole"]').each(async (price) => {

      expect(Number(price.text().replace(',', '')), `ASSERTION ERROR: Price is less than ${minPrice}`).to.be.greaterThan(Number(minPrice.replace(',', '')));
      expect(Number(price.text().replace(',', '')), `ASSERTION ERROR: Price is greater than ${maxPrice}`).to.be.lessThan(Number(maxPrice.replace(',', '')));
      await cy.addTestContext (`VALIDATED Successfully : ${price.text()} is more than ${minPrice} and less then ${maxPrice}`);

    });

  });
});