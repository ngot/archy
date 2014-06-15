var archy = require('../index');
var assert = require("assert");

var s = archy({
  label : 'beep',
  nodes : [
    'ity',
    {
      label : 'boop',
      nodes : [
        {
          label : 'o_O',
          nodes : [
            {
              label : 'oh',
              nodes : [ 'hello', 'puny' ]
            },
            'human'
          ]
        },
        'party!'
      ]
    }
  ]
});
assert.equal(s, [
    'beep',
    '├── ity',
    '└─┬ boop',
    '  ├─┬ o_O',
    '  │ ├─┬ oh',
    '  │ │ ├── hello',
    '  │ │ └── puny',
    '  │ └── human',
    '  └── party!',
    ''
].join('\n'));
