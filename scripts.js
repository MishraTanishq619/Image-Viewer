const images = [
	{
		loc: "images/box1_image.jpg",
	},
	{
		loc: "images/box2_image.jpg",
	},
	{
		loc: "images/box3_image.jpg",
	},
	{
		loc: "images/box4_image.jpg",
	},
	{
		loc: "images/box5_image.jpg",
	},
	{
		loc: "images/box6_image.jpg",
	},
	{
		loc: "images/box7_image.jpg",
	},
	{
		loc: "images/box8_image.jpg",
	},
];
var x = "";

for (const i of images) {
	x += `<img src = ${i.loc} alt="IMG" />`;
}

document.getElementById("all").innerHTML = x;

document.querySelector("#all").addEventListener("click", (dets) => {
	document.getElementById("prim").innerHTML = dets.target.outerHTML;
});
