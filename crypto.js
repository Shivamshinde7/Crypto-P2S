gsap.from(".page1 .text1",{
    transform:"translateY(-50%)"
})
gsap.from(".bitcoin", {
    scrollTrigger: {
      trigger: ".page2",
      start: "top 50%",
      toggleActions: "play none none none", // Adjust toggle actions as needed
    },
    x: -100,
    opacity: 0,
    duration: 1, // Animation duration in seconds
  });
  gsap.from(".Stats", {
    scrollTrigger: {
      trigger: ".page2",
      start: "top 40%",
      toggleActions: "play none none none", // Adjust toggle actions as needed
    },
    x: 100,
    opacity: 0,
    duration: 1, // Animation duration in seconds
  });

  gsap.from(".container1",{
    scrollTrigger:{
      trigger: ".page3",
      start: "top 50%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.from(".container2",{
    scrollTrigger:{
      trigger: ".page3",
      start: "top 60%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
  })
  gsap.from(".container3",{
    scrollTrigger:{
      trigger: ".page3",
      start: "top 30%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.from(".container4",{
    scrollTrigger:{
      trigger: ".page3",
      start: "top 20%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
  })
  gsap.from(".textpage4",{
    scrollTrigger:{
      trigger: ".page4",
      start: "top 50%",
    },
    x: -150,
    opacity: 0,
    duration: 1,
  })
  gsap.from(".phoneimg",{
    scrollTrigger:{
      trigger: ".page4",
      start: "top 50%",
    },
    y: 100,
    opacity: 0,
    duration: 2,
  })
  