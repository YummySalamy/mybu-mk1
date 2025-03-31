
const redirectToWhatsappChat = (phone, customMessage="") => {
    const url = `https://wa.me/${phone}?text=${customMessage}`;
    window.open(url, '_blank');
}

export default redirectToWhatsappChat;