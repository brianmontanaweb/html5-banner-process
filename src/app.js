var bannerTimeline = new TimelineMax({repeat: -1});

bannerTimeline
  .from('.bn-moon', 1, {
    x: 250
  })
  .to('.bn-sun', 1, {
    x: -250,
    delay: -1
  })
  .to('.bn-sky', 1, {
    opacity: 0.5,
    delay: -1
  })
  .set('.bn-sun', {
    x: 250
  })
  .to('.bn-moon', 1, {
    x: -250
  })
  .to('.bn-sky', 1, {
    opacity: 1,
    delay: -1
  })
  .to('.bn-sun', 1, {
    x: 0,
    delay: -1
  });