const binarySearch = require('../src/binary-search.js');

describe('binary search', function() {
  it('should return `true` for a small array', (done) => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var search = 9;
    expect(binarySearch(nums, search)).toEqual(true);
    done();
  });

  it('should return `false` for a large array', (done) => {
    var nums = [916,563,607,817,93,571,660,418,769,96,115,875,399,717,285,853,645,659,288,31,556,675,566,781,468,178,265,170,533,139,81,898,658,754,465,280,797,905,362,58,452,533,105,361,921,832,131,469,931,300];
    var search = 104;
    expect(binarySearch(nums, search)).toEqual(false);
    done();
  });

  it('should return `true` for a large array', (done) => {
    var nums = [916,563,607,817,93,571,660,418,769,96,115,875,399,717,285,853,645,659,288,31,556,675,566,781,468,178,265,170,533,139,81,898,658,754,465,280,797,905,362,58,452,533,105,361,921,832,131,469,931,300];
    var search = 797;
    expect(binarySearch(nums, search)).toEqual(true);
    done();
  });

  it('should return `true` for a string', (done) => {
    var str = "itwasthebestoftimesitwastheworseoftimes";
    var search = "w";
    expect(binarySearch(str, search)).toEqual(true);
    done();
  });

  it('should return `false` for a string', (done) => {
    var str = "itwasthebestoftimesitwastheworseoftimes";
    var search = "z";
    expect(binarySearch(str, search)).toEqual(false);
    done();
  });


});
