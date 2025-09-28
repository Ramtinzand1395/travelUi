export interface Dict {
  navbar: {
    btn: string;
  };
  header: {
    title: string;
    subtitle: string;
    Reviews: string;
    work: string;
    btn: string;
    AguasCaliente: string;
    Elevation: string;
    Distance: string;
  };
  sectionOne: {
    title: string;
    subtitle: string;
    peopleJoined: string;
  };
  sectionTwo: {
    title: string;
    subtitle: string;
    peopleJoined: string;
  };
  sectionThree: {
    title: string;
    subtitle: string;
    // اینجا تو داده‌هات peopleJoined نداشتی → اختیاریش کردم
    peopleJoined?: string;
  };
  guide: {
    preTitle: string;
    title: string;
    description: string;
    destinationLabel: string;
    destinationTime: string;
    destinationName: string;
    startTrackLabel: string;
    startTrackName: string;
  };
  getApp: {
    title: string;
    subtitle: string;
    appStore: string;
    playStore: string;
  };
}

// types.ts
export type Dicttwo = {
  sectionOne: {
    title: string;
    subtitle: string;
    peopleJoined: string;
  };
  sectionTwo: {
    title: string;
    subtitle: string;
    peopleJoined: string;
  };
  sectionThree: {
    title: string;
    subtitle: string;
    peopleJoined: string;
  };
  sectionFor: {
    title: string;
    subtitle: string;
    peopleJoined: string;
  };
};
