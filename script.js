
const accList = [
    { id: "001", name: "Acc Random Liên Quân", desc: "Rank cao, tướng ngẫu nhiên", price: "150K" },
    { id: "002", name: "Acc Free Fire Random", desc: "Full đồ, súng, ngẫu nhiên", price: "100K" },
    { id: "003", name: "Acc Garena VIP", desc: "Có thể liên kết, tài nguyên đầy đủ", price: "200K" }
];

const accContainer = document.getElementById("acc-list");
const formContainer = document.getElementById("form-container");
const accInput = document.getElementById("account_selected");

accList.forEach(acc => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${acc.name}</h3>
        <p>${acc.desc}</p>
        <p><strong>Giá: ${acc.price}</strong></p>
        <button onclick="selectAcc('${acc.name}')">Chọn Mua</button>
    `;
    accContainer.appendChild(card);
});

function selectAcc(accName) {
    accInput.value = accName;
    formContainer.style.display = "block";
    formContainer.scrollIntoView({ behavior: "smooth" });
}
