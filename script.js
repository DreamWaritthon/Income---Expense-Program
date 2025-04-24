const balance = document.querySelector('.balance');
const money_plus = document.querySelector('.money-plus');
const money_minus = document.querySelector('.money-minus');
const list = document.querySelector('.list');
const form = document.querySelector('.form');
const text = document.querySelector('.text');
const amount = document.querySelector('.amount');


const dataTransactions = [
    { id: 1, text: 'ค่าขนม', amount: -20 },
    { id: 2, text: 'ค่าห้อง', amount: 300 },
    { id: 3, text: 'เงินเดือน', amount: -20 },
]


const transaction = dataTransactions;
// Add transaction

function init(){
    transaction.forEach(addDataTolist); //การวนลูปเพื่อเรียกใช้ฟังก์ชัน addDataTolist สำหรับแต่ละ transaction ใน dataTransactions
}
function addDataTolist(transaction){
    const sign = transaction.amount < 0 ? '-' : '+'; //การกำหนดค่าตัวแปร sign ให้เป็น - หรือ + ขึ้นอยู่กับว่า transaction.amount น้อยกว่า 0 หรือไม่
    const item = document.createElement('li');   //การสร้าง element ใหม่
    // Add class                                        
    
}
console.log(transaction);
