// gsap.registerPlugin(ScrollTrigger);

gsap.from(".tag", {
	duration: 2.5,
	opacity: 0,
	delay: 2,
	ease: "power4",
});

gsap.from(".tag2", {
	duration: 4,
	y: "100%",
	opacity: 0,
	delay: 4,
	ease: "power4",
});

gsap.from(".enter", {
	duration: 4,
	opacity: 0,
	delay: 5,
	ease: "power4",
});

gsap.from(".navy", {
	duration: 3,
	y: "-100% ",
	opacity: 0,
	delay: 0,
	stagger: 0.1,
	ease: "power4",
});

gsap.from(".red", {
	duration: 3,
	y: "100%",
	opacity: 0,
	delay: 0,
	ease: "power2",
});

gsap.from(".black", {
	duration: 4,
	x: "-100%",
	opacity: 0,
	delay: 0,
	ease: "power4",
});

gsap.from(".head-container", {
	y: -400,
	duration: 1,
	opacity: 0,
	scrollTrigger: {
		trigger: ".head-container",
		start: "top center",
	},
});
