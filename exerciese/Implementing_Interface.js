"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, //here
    filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouToube {
    cameraMode;
    filter;
    burst;
    detector;
    constructor(cameraMode, filter, burst, detector //detector
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.detector = detector;
    }
    createStory() {
        console.log("Story was Created Sucessfully!");
    }
}
//# sourceMappingURL=Implementing_Interface.js.map