# Solana Sniper Rug-Pull Guard

A 35-line, zero-dependency pre-trade security gate that inspects any Solana SPL or Token-2022 mint address for active freeze/mint authorities and honeypot transfer taxes before your bot buys.

```bash
# Try free (3 live demos/day)
node index.mjs EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v --demo

# Production (<0.1ms with prepaid key from https://diogenesgateway.com/#prepay-checkout-widget)
DIOGENES_SESSION_KEY=dg_sec_... node index.mjs <MINT_ADDRESS>
```
