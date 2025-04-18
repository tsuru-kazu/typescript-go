//// [tests/cases/compiler/privacyVar.ts] ////

//// [privacyVar.ts]
export module m1 {
    export class C1_public {
        private f1() {
        }
    }

    class C2_private {
    }

    export class C3_public {
        private C3_v1_private: C1_public;
        public C3_v2_public: C1_public;
        private C3_v3_private: C2_private;
        public C3_v4_public: C2_private; // error

        private C3_v11_private = new C1_public();
        public C3_v12_public = new C1_public();
        private C3_v13_private = new C2_private();
        public C3_v14_public = new C2_private(); // error

        private C3_v21_private: C1_public = new C1_public();
        public C3_v22_public: C1_public = new C1_public();
        private C3_v23_private: C2_private = new C2_private();
        public C3_v24_public: C2_private = new C2_private(); // error
    }

    class C4_public {
        private C4_v1_private: C1_public;
        public C4_v2_public: C1_public;
        private C4_v3_private: C2_private;
        public C4_v4_public: C2_private;

        private C4_v11_private = new C1_public();
        public C4_v12_public = new C1_public();
        private C4_v13_private = new C2_private();
        public C4_v14_public = new C2_private();

        private C4_v21_private: C1_public = new C1_public();
        public C4_v22_public: C1_public = new C1_public();
        private C4_v23_private: C2_private = new C2_private();
        public C4_v24_public: C2_private = new C2_private();
    }

    var m1_v1_private: C1_public;
    export var m1_v2_public: C1_public;
    var m1_v3_private: C2_private;
    export var m1_v4_public: C2_private; // error

    var m1_v11_private = new C1_public();
    export var m1_v12_public = new C1_public();
    var m1_v13_private = new C2_private();
    export var m1_v14_public = new C2_private(); //error 

    var m1_v21_private: C1_public = new C1_public();
    export var m1_v22_public: C1_public = new C1_public();
    var m1_v23_private: C2_private = new C2_private();
    export var m1_v24_public: C2_private = new C2_private(); // error
}

module m2 {
    export class m2_C1_public {
        private f1() {
        }
    }

    class m2_C2_private {
    }

    export class m2_C3_public {
        private m2_C3_v1_private: m2_C1_public;
        public m2_C3_v2_public: m2_C1_public;
        private m2_C3_v3_private: m2_C2_private;
        public m2_C3_v4_public: m2_C2_private;

        private m2_C3_v11_private = new m2_C1_public();
        public m2_C3_v12_public = new m2_C1_public();
        private m2_C3_v13_private = new m2_C2_private();
        public m2_C3_v14_public = new m2_C2_private(); 

        private m2_C3_v21_private: m2_C1_public = new m2_C1_public();
        public m2_C3_v22_public: m2_C1_public = new m2_C1_public();
        private m2_C3_v23_private: m2_C2_private = new m2_C2_private();
        public m2_C3_v24_public: m2_C2_private = new m2_C2_private();
    }

    class m2_C4_public {
        private m2_C4_v1_private: m2_C1_public;
        public m2_C4_v2_public: m2_C1_public;
        private m2_C4_v3_private: m2_C2_private;
        public m2_C4_v4_public: m2_C2_private;

        private m2_C4_v11_private = new m2_C1_public();
        public m2_C4_v12_public = new m2_C1_public();
        private m2_C4_v13_private = new m2_C2_private();
        public m2_C4_v14_public = new m2_C2_private();

        private m2_C4_v21_private: m2_C1_public = new m2_C1_public();
        public m2_C4_v22_public: m2_C1_public = new m2_C1_public();
        private m2_C4_v23_private: m2_C2_private = new m2_C2_private();
        public m2_C4_v24_public: m2_C2_private = new m2_C2_private();
    }

    var m2_v1_private: m2_C1_public;
    export var m2_v2_public: m2_C1_public;
    var m2_v3_private: m2_C2_private;
    export var m2_v4_public: m2_C2_private; 

    var m2_v11_private = new m2_C1_public();
    export var m2_v12_public = new m2_C1_public();
    var m2_v13_private = new m2_C2_private();
    export var m2_v14_public = new m2_C2_private(); 

    var m2_v21_private: m2_C1_public = new m2_C1_public();
    export var m2_v22_public: m2_C1_public = new m2_C1_public();
    var m2_v23_private: m2_C2_private = new m2_C2_private();
    export var m2_v24_public: m2_C2_private = new m2_C2_private(); 
}

export class glo_C1_public {
    private f1() {
    }
}

class glo_C2_private {
}

export class glo_C3_public {
    private glo_C3_v1_private: glo_C1_public;
    public glo_C3_v2_public: glo_C1_public;
    private glo_C3_v3_private: glo_C2_private;
    public glo_C3_v4_public: glo_C2_private; //error

    private glo_C3_v11_private = new glo_C1_public();
    public glo_C3_v12_public = new glo_C1_public();
    private glo_C3_v13_private = new glo_C2_private();
    public glo_C3_v14_public = new glo_C2_private(); // error 

    private glo_C3_v21_private: glo_C1_public = new glo_C1_public();
    public glo_C3_v22_public: glo_C1_public = new glo_C1_public();
    private glo_C3_v23_private: glo_C2_private = new glo_C2_private();
    public glo_C3_v24_public: glo_C2_private = new glo_C2_private(); //error
}

class glo_C4_public {
    private glo_C4_v1_private: glo_C1_public;
    public glo_C4_v2_public: glo_C1_public;
    private glo_C4_v3_private: glo_C2_private;
    public glo_C4_v4_public: glo_C2_private;

    private glo_C4_v11_private = new glo_C1_public();
    public glo_C4_v12_public = new glo_C1_public();
    private glo_C4_v13_private = new glo_C2_private();
    public glo_C4_v14_public = new glo_C2_private();

    private glo_C4_v21_private: glo_C1_public = new glo_C1_public();
    public glo_C4_v22_public: glo_C1_public = new glo_C1_public();
    private glo_C4_v23_private: glo_C2_private = new glo_C2_private();
    public glo_C4_v24_public: glo_C2_private = new glo_C2_private();
}

var glo_v1_private: glo_C1_public;
export var glo_v2_public: glo_C1_public;
var glo_v3_private: glo_C2_private;
export var glo_v4_public: glo_C2_private; // error

var glo_v11_private = new glo_C1_public();
export var glo_v12_public = new glo_C1_public();
var glo_v13_private = new glo_C2_private();
export var glo_v14_public = new glo_C2_private(); // error

var glo_v21_private: glo_C1_public = new glo_C1_public();
export var glo_v22_public: glo_C1_public = new glo_C1_public();
var glo_v23_private: glo_C2_private = new glo_C2_private();
export var glo_v24_public: glo_C2_private = new glo_C2_private(); // error

//// [privacyVar.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.glo_v24_public = exports.glo_v22_public = exports.glo_v14_public = exports.glo_v12_public = exports.glo_v4_public = exports.glo_v2_public = exports.glo_C3_public = exports.glo_C1_public = exports.m1 = void 0;
var m1;
(function (m1) {
    class C1_public {
        f1() {
        }
    }
    m1.C1_public = C1_public;
    class C2_private {
    }
    class C3_public {
        C3_v1_private;
        C3_v2_public;
        C3_v3_private;
        C3_v4_public; // error
        C3_v11_private = new C1_public();
        C3_v12_public = new C1_public();
        C3_v13_private = new C2_private();
        C3_v14_public = new C2_private(); // error
        C3_v21_private = new C1_public();
        C3_v22_public = new C1_public();
        C3_v23_private = new C2_private();
        C3_v24_public = new C2_private(); // error
    }
    m1.C3_public = C3_public;
    class C4_public {
        C4_v1_private;
        C4_v2_public;
        C4_v3_private;
        C4_v4_public;
        C4_v11_private = new C1_public();
        C4_v12_public = new C1_public();
        C4_v13_private = new C2_private();
        C4_v14_public = new C2_private();
        C4_v21_private = new C1_public();
        C4_v22_public = new C1_public();
        C4_v23_private = new C2_private();
        C4_v24_public = new C2_private();
    }
    var m1_v1_private;
    var m1_v3_private;
    var m1_v11_private = new C1_public();
    m1.m1_v12_public = new C1_public();
    var m1_v13_private = new C2_private();
    m1.m1_v14_public = new C2_private(); //error 
    var m1_v21_private = new C1_public();
    m1.m1_v22_public = new C1_public();
    var m1_v23_private = new C2_private();
    m1.m1_v24_public = new C2_private(); // error
})(m1 || (exports.m1 = m1 = {}));
var m2;
(function (m2) {
    class m2_C1_public {
        f1() {
        }
    }
    m2.m2_C1_public = m2_C1_public;
    class m2_C2_private {
    }
    class m2_C3_public {
        m2_C3_v1_private;
        m2_C3_v2_public;
        m2_C3_v3_private;
        m2_C3_v4_public;
        m2_C3_v11_private = new m2_C1_public();
        m2_C3_v12_public = new m2_C1_public();
        m2_C3_v13_private = new m2_C2_private();
        m2_C3_v14_public = new m2_C2_private();
        m2_C3_v21_private = new m2_C1_public();
        m2_C3_v22_public = new m2_C1_public();
        m2_C3_v23_private = new m2_C2_private();
        m2_C3_v24_public = new m2_C2_private();
    }
    m2.m2_C3_public = m2_C3_public;
    class m2_C4_public {
        m2_C4_v1_private;
        m2_C4_v2_public;
        m2_C4_v3_private;
        m2_C4_v4_public;
        m2_C4_v11_private = new m2_C1_public();
        m2_C4_v12_public = new m2_C1_public();
        m2_C4_v13_private = new m2_C2_private();
        m2_C4_v14_public = new m2_C2_private();
        m2_C4_v21_private = new m2_C1_public();
        m2_C4_v22_public = new m2_C1_public();
        m2_C4_v23_private = new m2_C2_private();
        m2_C4_v24_public = new m2_C2_private();
    }
    var m2_v1_private;
    var m2_v3_private;
    var m2_v11_private = new m2_C1_public();
    m2.m2_v12_public = new m2_C1_public();
    var m2_v13_private = new m2_C2_private();
    m2.m2_v14_public = new m2_C2_private();
    var m2_v21_private = new m2_C1_public();
    m2.m2_v22_public = new m2_C1_public();
    var m2_v23_private = new m2_C2_private();
    m2.m2_v24_public = new m2_C2_private();
})(m2 || (m2 = {}));
class glo_C1_public {
    f1() {
    }
}
exports.glo_C1_public = glo_C1_public;
class glo_C2_private {
}
class glo_C3_public {
    glo_C3_v1_private;
    glo_C3_v2_public;
    glo_C3_v3_private;
    glo_C3_v4_public; //error
    glo_C3_v11_private = new glo_C1_public();
    glo_C3_v12_public = new glo_C1_public();
    glo_C3_v13_private = new glo_C2_private();
    glo_C3_v14_public = new glo_C2_private(); // error 
    glo_C3_v21_private = new glo_C1_public();
    glo_C3_v22_public = new glo_C1_public();
    glo_C3_v23_private = new glo_C2_private();
    glo_C3_v24_public = new glo_C2_private(); //error
}
exports.glo_C3_public = glo_C3_public;
class glo_C4_public {
    glo_C4_v1_private;
    glo_C4_v2_public;
    glo_C4_v3_private;
    glo_C4_v4_public;
    glo_C4_v11_private = new glo_C1_public();
    glo_C4_v12_public = new glo_C1_public();
    glo_C4_v13_private = new glo_C2_private();
    glo_C4_v14_public = new glo_C2_private();
    glo_C4_v21_private = new glo_C1_public();
    glo_C4_v22_public = new glo_C1_public();
    glo_C4_v23_private = new glo_C2_private();
    glo_C4_v24_public = new glo_C2_private();
}
var glo_v1_private;
var glo_v3_private;
var glo_v11_private = new glo_C1_public();
exports.glo_v12_public = new glo_C1_public();
var glo_v13_private = new glo_C2_private();
exports.glo_v14_public = new glo_C2_private(); // error
var glo_v21_private = new glo_C1_public();
exports.glo_v22_public = new glo_C1_public();
var glo_v23_private = new glo_C2_private();
exports.glo_v24_public = new glo_C2_private(); // error
