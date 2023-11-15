import "./style.css";

const box1: HTMLDivElement = document.querySelector(".box1")!;
const box2: HTMLDivElement = document.querySelector(".box2")!;
const box3: HTMLDivElement = document.querySelector(".box3")!;
const box4: HTMLDivElement = document.querySelector(".box4")!;
const box5: HTMLDivElement = document.querySelector(".box5")!;
const box6: HTMLDivElement = document.querySelector(".box6")!;
const image1:HTMLDivElement = document.querySelector(".image1")!;
const image2:HTMLDivElement = document.querySelector(".image2")!;
const image3:HTMLDivElement = document.querySelector(".image3")!;
const image4:HTMLDivElement = document.querySelector(".image4")!;
const image5:HTMLDivElement = document.querySelector(".image5")!;
const image6:HTMLDivElement = document.querySelector(".image6")!;
const delate1:HTMLParagraphElement = document.querySelector(".delate1")!;
const delate2:HTMLParagraphElement = document.querySelector(".delate2")!;
const delate3:HTMLParagraphElement = document.querySelector(".delate3")!;
const delate4:HTMLParagraphElement = document.querySelector(".delate4")!;
const delate5:HTMLParagraphElement = document.querySelector(".delate5")!;
const delate6:HTMLParagraphElement = document.querySelector(".delate6")!;
const next1:HTMLParagraphElement = document.querySelector(".next1")!;
const next2:HTMLParagraphElement = document.querySelector(".next2")!;
const next3:HTMLParagraphElement = document.querySelector(".next3")!;
const next4:HTMLParagraphElement = document.querySelector(".next4")!;
const next5:HTMLParagraphElement = document.querySelector(".next5")!;
const next6:HTMLParagraphElement = document.querySelector(".next6")!;
const before1:HTMLParagraphElement = document.querySelector(".before1")!;
const before2:HTMLParagraphElement = document.querySelector(".before2")!;
const before3:HTMLParagraphElement = document.querySelector(".before3")!;
const before4:HTMLParagraphElement = document.querySelector(".before4")!;
const before5:HTMLParagraphElement = document.querySelector(".before5")!;
const before6:HTMLParagraphElement = document.querySelector(".before6")!;
const p: HTMLParagraphElement = document.querySelector(".jj")!;


	box1.onclick = () =>{
		image1.style.display="block";
		next1.onclick = () =>{
		image1.style.display="none";
		image2.style.display="block";

		}
		}


box2.onclick = () =>{
	image2.style.display="block";
	}

box3.onclick = () =>{
	image3.style.display="block";
	}

box4.onclick = () =>{
	image4.style.display="block";
	}

box5.onclick = () =>{
	image5.style.display="block";
	}

	box6.onclick = () =>{
		image6.style.display="block";
		}

		delate1.onclick = () =>{
			image1.style.display="none";
			}
			delate2.onclick = () =>{
				image2.style.display="none";
				}
				delate3.onclick = () =>{
					image3.style.display="none";
					}
					delate4.onclick = () =>{
						image4.style.display="none";
						}
						delate5.onclick = () =>{
							image5.style.display="none";
							}
							delate6.onclick = () =>{
								image6.style.display="none";
								}


