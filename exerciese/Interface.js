"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    dbid: 2389,
    username: 'Patrick',
    email: 'ppp@gmail.com',
    userId: crypto.randomUUID(),
    price: 23,
    role: 'SuperAdmin',
    githubToken: crypto.randomUUID(),
    startTrials: () => `Trial has started Already!`,
    getCoupon: (name, off) => (off / 100) * user.price
};
//user.dbid=2334;
console.log(user);
console.log(user.getCoupon('Pazzo', 10));
//# sourceMappingURL=Interface.js.map