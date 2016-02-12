import {expect} from 'chai';

const fac = n => {if(n === 0){return 1}else{return n * fac(n - 1)}};

describe('factorial', () => {
	it('should work!', () => {
		expect(fac(5)).to.equal(120);
	});
});