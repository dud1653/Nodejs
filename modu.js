var modu = {
    a: 'a',
    b: function() {
        console.log(this.a)
    }
}

modu.b()

var modupart = require('./modupart.js')
modupart.b()