const API_REQUEST_PAYMENT = 'https://uat-payment.neopay.com.vn/api/v1/paygate/neopay';

/**
 * @param {String} text (text is a String)
 * @returns {String}
 */
async function hashSHA256(text) {
    const utf8 = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
}

const NeoPayPaymentGateway = {
    /**
     * Assign the project to an data.
     * @param {Object} data - Data of request payment.
     * @param {string} data.neo_MerchantCode - neo_MerchantCode.
     * @param {string} data.neo_PaymentMethod - neo_PaymentMethod.
     * @param {string} data.neo_Currency - neo_Currency.
     * @param {string} data.neo_Locale - neo_Locale.
     * @param {string} data.neo_Version - neo_Version.
     * @param {string} data.neo_Command - neo_Command.
     * @param {string} data.neo_Amount - neo_Amount.
     * @param {string} data.neo_MerchantTxnID - neo_MerchantTxnID.
     * @param {string} data.neo_OrderID - neo_OrderID.
     * @param {string} data.neo_OrderInfo - neo_OrderInfo.
     * @param {string} data.neo_Title - neo_Title.
     * @param {string} data.neo_ReturnURL - neo_ReturnURL.
     * @param {string} data.neo_AgainURL - neo_AgainURL.
     * @param {String} hashKey (hashKey is a String)
     */
    pay: async function (data, hashKey) {
        let url = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
        const secureHashBefore = Object.keys(data).sort((a, b) => a.localeCompare(b))
            .map((field) => {
                if (field === "neo_PaymentMethod") {
                    return (data[field] || []).join(",");
                }
                return data[field]
            })
            .join("") + hashKey;
        const secureHashAfter = (await hashSHA256(secureHashBefore)).toUpperCase()
        url = `${API_REQUEST_PAYMENT}?${url}&neo_SecureHash=${secureHashAfter}`
        window.location.href = url;
    }
}

module.exports = NeoPayPaymentGateway;
