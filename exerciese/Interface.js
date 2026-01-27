var user = {
    dbid: 2389,
    username: 'Patrick',
    email: 'ppp@gmail.com',
    userId: crypto.randomUUID(),
    price: 23,
    role: 'SuperAdmin',
    githubToken: crypto.randomUUID(),
    startTrials: function () { return "Trial has started Already!"; },
    getCoupon: function (name, off) { return (off / 100) * user.price; }
};
//user.dbid=2334;
console.log(user);
console.log(user.getCoupon('Pazzo', 10));
