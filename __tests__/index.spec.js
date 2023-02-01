require('../src');

describe('api.basic test', () => {
  test('nx.gpid basic case', function () {
    var url = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    var res = nx.gpid(url);
    expect(res).toBe('googlelogo_color_272x92dp');
  });
});
