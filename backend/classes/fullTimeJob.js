function FullTimeJob(name) {
    this.super_ = Job;
    this.super_.call(this,name);
    this.jobDescription = "fulltimejob";
}