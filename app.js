const form = document.querySelector(".quiz-form");
const dogruCevaplar = ["B", "B", "A", "A", "C"];
const sonuc = document.querySelector(".result");
let puan = 0;
let tamponPuan = 0;

function information() {
  const kullaniciCevapları = [
    form.s1.value,
    form.s2.value,
    form.s3.value,
    form.s4.value,
    form.s5.value,
  ];

  puan = checkAnswer(kullaniciCevapları, puan);
  sonuc.querySelector("span").textContent = `${puan}`;
  sonuc.classList.remove("d-none");
  scrollTo(0, 0);
  const animasyon = setInterval(() => {
    sonuc.querySelector("span").textContent = `${tamponPuan}`;
    if (tamponPuan === puan) {
      clearInterval(animasyon);
    } else {
      tamponPuan++;
    }
  }, 50);
  clearInterval(timeinterval);
}

checkAnswer = (answers, puan) => {
  dogruCevaplar.map((x, index) => {
    if (x == answers[index]) {
      puan += 20;
    }
  });
  return puan;
};
let time = document.querySelector(".time");
let sn = 0;
let dk = 0;
let saat = 0;
function sayacArttır() {
  sn += 1;

  if (sn === 60) {
    dk += 1;
    sn = 0;
  }
  if (dk == 60) {
    saat += 1;
    dk = 0;
  }
  time.innerHTML = `süre: ${saat} saat -  ${dk} dk- ${sn} sn  `;
}

const timeinterval = setInterval(sayacArttır, 1000);
