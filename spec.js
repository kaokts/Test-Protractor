//6209650529
describe('TC005', function () {
    it('Test Add User', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');

        element(by.css('button[class="btn btn-link pull-right"]')).click();
        element(by.name('FirstName')).sendKeys('Kriettisak');
        element(by.name('LastName')).sendKeys('Phasit');
        element(by.name('UserName')).sendKeys('Kao');
        element(by.name('Password')).sendKeys('1234');
        element.all(by.css('label[class="radio ng-scope ng-binding"]')).get(0).click();
        element(by.name('RoleId')).element(by.css('option[value="1"]')).click();
        element(by.name('Email')).sendKeys('kao@gmail.com');
        element(by.name('Mobilephone')).sendKeys('0811234');
        element(by.css('button[class="btn btn-success"]')).click();

        let result = element.all(by.css('td[class="smart-table-data-cell"]')).get(0);
        expect(result.getText()).toEqual('Kriettisak');
    });
});