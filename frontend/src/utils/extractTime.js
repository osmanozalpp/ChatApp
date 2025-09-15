// extractTime fonksiyonu
export function extractTime(dateString) {
    const date = new Date(dateString); // Verilen tarih string'ini Date objesine çeviriyoruz
    const hours = padZero(date.getHours()); // Saat
    const minutes = padZero(date.getMinutes()); // Dakika
    return `${hours}:${minutes}`; // Saat: dakika formatında döndürüyoruz
}

// padZero fonksiyonu
function padZero(number) {
    return number.toString().padStart(2, "0"); // 2 karakterli bir string elde etmek için '0' ekler
}
