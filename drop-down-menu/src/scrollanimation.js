// let observer = new IntersectionObserver((e)=>{
//     e.forEach((박스)=>{
//         박스.target.style.opacity = 1; //화면에 보일때만 1로 보이게 \
//         // if(박스.isIntersecting){
//         //     박스.target.style.opacity = 1;
//         //     // 박스.target.style.transform = rotate();
//         // }
//         // 박스.intersectionRatio;
//     })
// })

// //observer.observe()//html 요소가 화면에 등장하는지 감시해줌 능동적으로 요소를 소괄호 안에 넣음 됨 

// let div = document.querySelector('div')
// observer.observe(div[0])
// observer.observe(div[1])
// observer.observe(div[2])
// observer.observe(div[3])


let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1; // 화면에 보일 때 투명도 조정
        }
    });
});

// 모든 div 요소 선택
let divs = document.querySelectorAll('div');

// 각 div를 감시하도록 설정
divs.forEach((div) => observer.observe(div));
