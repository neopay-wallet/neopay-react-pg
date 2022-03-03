# neopay-react-pg
ReactJS SDK for NeoPay Payment Gateway

## Install

```bash
npm install neopay-react-pg --save
```

## Use

```typescript
import React from 'react';
import NeoPayPaymentGateway from "neopay-react-pg";

const CheckoutComponent = () => {
    const checkoutWithNeoPay = () => {
        NeoPayPaymentGateway.pay({
            neo_MerchantCode: 'concung',
            neo_PaymentMethod: ["WALLET", "ATM", "CC"],
            neo_Currency: 'VND',
            neo_Locale: 'vi',
            neo_Version: '1',
            neo_Command: 'PAY',
            neo_Amount: 100000,
            neo_MerchantTxnID: 'T23343243',
            neo_OrderID: 'DH23343243',
            neo_OrderInfo: `Thanh toán ĐH DH23343243`,
            neo_Title: 'Thanh toán',
            neo_ReturnURL: "https://merchant-domain.com/cart/23343243/checkout",
            neo_AgainURL: "https://merchant-domain.com/cart/23343243/checkout"
        }, '123456');
    }

    return (
        <div>
            <input type="button" value="Checkout with NeoPay" onClick={e => checkoutWithNeoPay()}/>
    </div>
);
};

export default CheckoutComponent;
```

## Methods

### pay

NeoPayPaymentGateway.pay

| Param            | Type                           | Default                        | Description
| ----------------- | ------------------------------ | ------------------------------ | ------------------------------------------------- |
| neo_MerchantCode    | string                      |                           | neo_MerchantCode               |
| neo_PaymentMethod       | boolean                        | ["WALLET", "ATM", "CC"]                          | neo_PaymentMethod                                 |
| neo_Currency           | string                         | VND                           | neo_Currency                      |
| neo_Locale   | string                         | vi                           | neo_Locale      |
| neo_Version    | string | 1 | neo_Version
| neo_Command            | string                         | PAY                      | neo_Command                            |
| neo_Amount          | number |                | Amount                          
| neo_MerchantTxnID        | string                        |                           | neo_MerchantTxnID                             |
| neo_OrderID       | string                        |                           | neo_OrderID                                 |
| neo_OrderInfo | string |                    | neo_OrderInfo        |
| neo_Title        | string                         |                    | neo_Title                                    |
| neo_ReturnURL     | string                         |               | neo_ReturnURL                          |
| neo_AgainURL        | string                         |                   | neo_AgainURL                       | | Fires `changeDetectorRef.detectChanges()` when activated. Helps show toast from asynchronous events outside of Angular's change detection |
